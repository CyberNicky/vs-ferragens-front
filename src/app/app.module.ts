import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { AboutComponent } from './pages/about/about.component';
import { AngularMaterialModule } from './modules/angular-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductsComponent } from './pages/products/products.component';
import { ProductModelComponent } from './pages/product-model/product-model.component';
import { CommonModule } from '@angular/common';
import { BudgetScreenComponent } from './pages/budget-screen/budget-screen.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    MenuBarComponent,
    AboutComponent,
    ProductsComponent,
    ProductModelComponent,
    BudgetScreenComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    AngularMaterialModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [CommonModule], //add common module here
})
export class AppModule {}
