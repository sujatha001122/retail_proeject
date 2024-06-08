import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { SelectItem } from 'primeng/api';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import {  shareReplay, tap } from 'rxjs/operators';
import { Filter, PriceInfo, Product } from 'src/app/models/product';
import { ProductserviceService } from 'src/app/services/productservice.service';
import { UserDashboardComponent } from 'src/app/user-dashboard/user-dashboard.component';
// import product from '../assets/metadata/product.json';


@Component({
  selector: 'app-louis',
  templateUrl: './louis.component.html',
  styleUrls: ['./louis.component.css']
})
export class LouisComponent implements OnInit {
  
  // productApiData = {} as Product;
  sortOptions: SelectItem[];
  product:Product[];
  //  products ={} as Product;
  sortKey:any[];
  sortOrder: number;
  sortField: string;
  // data: any;
  // categeries:any;
  ProductSelected: number;
  listfilter: Filter[];
  // filteredCategories:any
 
  


  constructor(private productService: ProductserviceService, private primengConfig: PrimeNGConfig) {
    // this.productService.getProducts().subscribe((datas) =>{
    //   this.product = datas.products;
    //   console.log(datas);
    // })  
  // console.log(this.filteredCategories(category));

  this.productService.getProductFromApi().subscribe((data)=>{
    this.product = data.products;
    console.log(data);
  })

  this.sortOptions = [
    {label: 'Price High to Low', value: '!price'},
    {label: 'Price Low to High', value: 'price'}
];
   }
   
  
  ngOnInit() :void { 
    

  this.primengConfig.ripple = true;
  }

  onSortChange(event:any) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
        this.sortOrder = -1;
        this.sortField = value.substring(1, value.length);
    }
    else {
        this.sortOrder = 1;
        this.sortField = value;
    }
}

onProductSelected(selectedid:any):void{
  this.productService.getFilterforProductSelected(selectedid).subscribe(data=>{
    this.listfilter=data
  })
}
 addItem(product:any){
    console.log(product);
      // this.route.navigate(['/bag/:id', item]);
    // pathname + queryParam(item.id)
  }

}
