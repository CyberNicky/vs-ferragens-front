import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs';
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
  form!: FormGroup;
  inputs: any[] = [];

  get inputData() {
    return this.form.get('inputData') as FormArray;
  }
  createFormProduct(id: number) {
    this.form = new FormGroup({
      inputData: new FormArray([]),
    });

    this.productService
      .getProduct(id)
      .pipe(take(1))
      .subscribe((inputs) => {
        this.inputs = inputs.map((item: any) => item.input);
        inputs.forEach(({ input }: any) => {
          this.inputData.push(
            new FormGroup({
              id: new FormControl(input.id),
              value: new FormControl(''),
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
  product!: any;

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    if (id) {
      this.createFormProduct(+id);
    }
  }
}
