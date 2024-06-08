import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
// import { ShopComponent } from './shop/shop.component';
import { AppComponent } from './app.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { CardModule} from 'primeng/card';
import { MegaMenuModule} from 'primeng/megamenu';
import { TabMenuModule} from 'primeng/tabmenu';
import { DropdownModule} from 'primeng/dropdown';
import { LoginComponent } from './login/login.component';
import { AddtocartComponent } from './addtocart/addtocart.component';
import { PanelModule} from 'primeng/panel';
import { ButtonModule} from 'primeng/button';
import { InputTextareaModule } from "primeng/inputtextarea";
import { InputTextModule } from "primeng/inputtext";
import { PasswordModule} from 'primeng/password';
import { FormsModule } from '@angular/forms';
import { BagComponent } from './bag/bag.component';
import { LouisComponent } from './login/Components/louis/louis.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { DataViewModule} from 'primeng/dataview';
import { RadioButtonModule} from 'primeng/radiobutton';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductsingleComponent } from './productsingle/productsingle.component';
import { SingleproductComponent } from './productsingle/singleproduct/singleproduct.component';
import { SearchitemComponent } from './navbar/searchitem/searchitem.component';


@NgModule({
  declarations: [
    AppComponent,
    UserDashboardComponent,
    LoginComponent,
    AddtocartComponent,
    BagComponent,
    LouisComponent,
    NavbarComponent,
    ProductsingleComponent,
    SingleproductComponent,
    SearchitemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule,
    MegaMenuModule,
    TabMenuModule,
    PanelModule,
    ButtonModule,
    InputTextModule,
    InputTextareaModule,
    PasswordModule,
    FormsModule,
    HttpClientModule,
    DataViewModule,
    RadioButtonModule,
    DropdownModule,
    BrowserAnimationsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
