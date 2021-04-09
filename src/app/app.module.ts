import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { gsap } from "gsap";
import { FormsModule } from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { ProductsComponent } from './products/products.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CheckoutComponent } from './checkout/checkout.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FourOhFourComponent,
    AboutComponent,
    HeaderComponent,
    ProductsComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
