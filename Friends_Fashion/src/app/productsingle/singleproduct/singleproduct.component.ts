import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Productsingle } from 'src/app/models/product';
import { BagComponent } from 'src/app/bag/bag.component';

@Component({
  selector: 'app-singleproduct',
  templateUrl: './singleproduct.component.html',
  styleUrls: ['./singleproduct.component.css']
})
export class SingleproductComponent implements OnInit {
  productId: string | null;
  productData: any;
  productsingle: Productsingle[];
  constructor(private http:HttpClient,private activerouter:ActivatedRoute) { }

  ngOnInit(): void {
    this.productId =this.activerouter.snapshot.paramMap.get("id");
    //console.log(this.productId);
    this.http.get("https://therichpost.com/testjsonapi/product/"+ this.productId+"/").subscribe(data=>{
      this.productData = data;
    })
   
  }

}
