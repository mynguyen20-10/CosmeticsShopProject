import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {routing} from "./app.routing";
import {AuthenticationService} from "./service/auth.service";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import {ListUserComponent} from "./list-user/list-user.component";
import {UserService} from "./service/user.service";
import { HomeComponent } from './home/home.component';

import { IntroductionComponent } from './introduction/introduction.component';
import { ContactComponent } from './contact/contact.component';
import { SonComponent } from './son/son.component';
import { SuaruamatComponent } from './suaruamat/suaruamat.component';
import { MatnaComponent } from './matna/matna.component';
import { KemduongComponent } from './kemduong/kemduong.component';
import { SpComponent } from './sp/sp.component';
import { CartComponent } from './cart/cart.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductService } from './service/product.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListUserComponent,
    AddUserComponent,
    EditUserComponent,
    HomeComponent,
    
    IntroductionComponent,
    ContactComponent,
    SonComponent,
    SuaruamatComponent,
    MatnaComponent,
    KemduongComponent,
    SpComponent,
    CartComponent,
    ProductDetailsComponent,
  ],
  imports: [
    BrowserModule,
    routing,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthenticationService, UserService, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
