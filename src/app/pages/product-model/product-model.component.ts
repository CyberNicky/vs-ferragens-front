import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-model',
  templateUrl: './product-model.component.html',
  styleUrls: ['./product-model.component.scss'],
})
export class ProductModelComponent implements OnInit {
  constructor(
    private router: Router,
    private productService: ProductsService,
    private route: ActivatedRoute
  ) {}

  product!: any;
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    if (id) {
      this.productService.getProduct(+id).subscribe((product) => {
        this.product = product;
      });
    }
  }
  // changeImage(id: number) {
  //   const image = this.product.images.find((image) => image.id === id)!;
  //   this.imageAtual = image;
  // }
  navigateTo(page: string) {
    // Use o router para navegar para a página desejada
    this.router.navigate([page]);
  }

  goToLink(url: string) {
    window.open(url, '_blank');
  }
}
