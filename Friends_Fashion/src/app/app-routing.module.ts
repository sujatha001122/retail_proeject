import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddtocartComponent } from './addtocart/addtocart.component';
import { BagComponent } from './bag/bag.component';
import { LouisComponent } from './login/Components/louis/louis.component';
import { LoginComponent } from './login/login.component';
import { SearchitemComponent } from './navbar/searchitem/searchitem.component';
import { ProductsingleComponent } from './productsingle/productsingle.component';
import { SingleproductComponent } from './productsingle/singleproduct/singleproduct.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';

const routes: Routes = [
  {
    path:'user-dashboard',
    component: UserDashboardComponent
  },
  {
    path:'productsingle',
    component: ProductsingleComponent,
  // children:[
  //   {
  //      path:'bag',component:BagComponent
  //   } 
  // ] 
  }, 
  {
    path:'singleproduct/:id', 
    component:SingleproductComponent,
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'addtocart',
    component:AddtocartComponent
  },
  {
    path:'bag/:id',
    component:BagComponent
  },
  {
    path:'louis',
    component:LouisComponent
  },
  {
    path:'searchitem',
    component:SearchitemComponent
  },
  {
    path:'',
    redirectTo:'user-dashboard',
    pathMatch:'full'
  },
  {
    path:'**',redirectTo:'user-dashboard'
  },
];

@NgModule({imports: [RouterModule.forRoot(routes)],exports: [RouterModule]})
export class AppRoutingModule { }
 