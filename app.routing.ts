import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {AddUserComponent} from "./add-user/add-user.component";
import {ListUserComponent} from "./list-user/list-user.component";
import {EditUserComponent} from "./edit-user/edit-user.component";
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


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'add-user', component: AddUserComponent },
  { path: 'list-user', component: ListUserComponent },
  { path: 'edit-user', component: EditUserComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  {path : 'home', component : HomeComponent},
  {path:"gioithieu",component : IntroductionComponent},
  {path:"lienhe",component : ContactComponent},
  {path:"son",component :SonComponent},
  {path:"sua-rua-mat",component :SuaruamatComponent},
  {path:"mat-na",component :MatnaComponent},
  {path:"kem-duong",component :KemduongComponent},
  {path:"sp",component:SpComponent},
  {path:"cart",component:CartComponent},
  {path:"product/:id",component:ProductDetailsComponent}
  
];

export const routing = RouterModule.forRoot(routes);
