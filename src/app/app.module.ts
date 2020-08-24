import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './componets/shared/header/header.component';
import { FooterComponent } from './componets/shared/footer/footer.component';
import { NavComponent } from './componets/shared/nav/nav.component';
import { ShoppingCartComponent } from './componets/shopping-cart/shopping-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    ShoppingCartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
