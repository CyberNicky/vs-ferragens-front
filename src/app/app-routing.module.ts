import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { BudgetScreenComponent } from './pages/budget-screen/budget-screen.component';
import { ProductModelComponent } from './pages/product-model/product-model.component';
import { ProductsComponent } from './pages/products/products.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';

const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent,
  },
  {
    path: 'categorias',
    component: ProductsComponent,
  },
  {
    path: 'sobre',
    component: AboutComponent,
  },
  {
    path: 'produtos/:id',
    component: ProductModelComponent,
  },
  {
    path: 'orçamento',
    component: BudgetScreenComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
