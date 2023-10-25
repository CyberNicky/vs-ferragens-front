import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-model',
  templateUrl: './product-model.component.html',
  styleUrls: ['./product-model.component.scss'],
})
export class ProductModelComponent implements OnInit {
  imageAtual!: { id: number; name: string; value: string };
  constructor(private router: Router) {}
  product = {
    images: [
      {
        id: 0,
        name: 'janela',
        value: '../../../assets/jpg/janela.jpg',
      },
      {
        id: 1,
        name: 'janelaFrente',
        value: '../../../assets/jpg/159359-800-auto.jpg',
      },
      {
        id: 2,
        name: 'janelaaluminio',
        value: '../../../assets/jpg/597642558_1.jpg',
      },
      {
        id: 3,
        name: 'janelateste',
        value:
          '../../../assets/jpg/Janela-Correr-2-Folhas-Moveis-120X120--CompX-Larg---Aluminio-Branca-Esquadrisul-1641565.jpg',
      },
    ],
  };
  ngOnInit() {
    this.imageAtual = this.product.images[0];
  }
  changeImage(id: number) {
    const image = this.product.images.find((image) => image.id === id)!;
    this.imageAtual = image;
  }
  navigateTo(page: string) {
    // Use o router para navegar para a página desejada
    this.router.navigate([page]);
  }

  goToLink(url: string) {
    window.open(url, '_blank');
  }
}
