import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { HttpClient } from "@angular/common/http";
import {ProductsingleService  } from 'src/app/services/productsingle.service';
import { Productsingle } from '../models/product';
@Component({
  selector: 'app-productsingle',
  templateUrl: './productsingle.component.html',
  styleUrls: ['./productsingle.component.css']
})
export class ProductsingleComponent implements OnInit {
  productId: string | null;
  productData: any;
  productsingle: Productsingle[];
 

  constructor(private productsingleservice:ProductsingleService, private route:Router) { 
    this.productsingleservice.getProductsingle().subscribe(datas =>{
      this.productsingle = datas
      console.log(datas);
      
    } )
  }

  ngOnInit(): void {
    // this.productId =this.activatedRoute.snapshot.paramMap.get("id");
    // console.log(this.productId);
    // this.http.get("https://therichpost.com/testjsonapi/product/"+this.productId+"/").subscribe(data =>{
    //  this.productData=data; 
    // })

  }

  addItem(item:any){
    console.log(item);
      // this.route.navigate(['/bag/:id', item]);
    // pathname + queryParam(item.id)
  }

 
}