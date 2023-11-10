import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs';
import {
  InputInterface,
  ProductInterface,
} from 'src/app/interfaces/productInput.interface';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-budget-screen',
  templateUrl: './budget-screen.component.html',
  styleUrls: ['./budget-screen.component.scss'],
})
export class BudgetScreenComponent {
  constructor(
    private router: Router,
    private productService: ProductsService,
    private route: ActivatedRoute
  ) {}
  form = new FormGroup({
    inputData: new FormArray([]),
  });
  product!: ProductInterface;
  inputs: InputInterface[] = [];

  get inputData() {
    return this.form.get('inputData') as FormArray;
  }

  onSubmit() {
    const inputs: any = this.form.value
      .inputData!.map(
        (input: any) =>
          `${this.inputs.find((i) => i.id === input.id)!.name}: ${input.value}`
      )
      .join('%0D%0A');
    const message = `Oi, desejo fazer um orçamento para ${this.product.name} com os seguintes parâmetros:%0D%0A%0D%0A${inputs}`;
    const url = `https://api.whatsapp.com/send?phone=5582988366137&text=${message}`;
    console.log(url);
    window.open(url);
  }

  createFormProduct(id: number) {
    this.productService
      .getProduct(id)
      .pipe(take(1))
      .subscribe((product) => {
        this.product = product;
        this.inputs = product.inputs;

        product.inputs.forEach((input) => {
          this.inputData.push(
            new FormGroup({
              id: new FormControl(input.id),
              value: new FormControl(null),
            })
          );
        });
      });
  }
  getFormControl(index: number): FormControl {
    const formInputs = this.form.get('inputData') as FormArray;
    const formG = formInputs.controls[index] as FormGroup;

    return formG.get('value') as FormControl;
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    if (id) {
      this.createFormProduct(+id);
    }
  }
}
