import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  constructor(
    private router: Router,
    private productService: ProductsService,
    private route: ActivatedRoute
  ) {}
  navigateTo(page: string, id: number) {
    // Use o router para navegar para a página desejada
    this.router.navigate([page, id]);
  }

  products!: any[];
  ngOnInit() {
    console.log('teste');
    this.productService.getProducts().subscribe((products) => {
      this.products = products;
    });
  }
}
