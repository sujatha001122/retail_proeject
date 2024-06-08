import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-bag',
  templateUrl: './bag.component.html',
  styleUrls: ['./bag.component.css']
})
export class BagComponent implements OnInit {

  constructor(private http:HttpClient,private activerouter:ActivatedRoute) { }
  productData1:any;
  productID: string | null;

  ngOnInit(): void {
    this.productID =this.activerouter.snapshot.paramMap.get("id");
    //console.log(this.productId);
    this.http.get("https://retail.googleapis.com/v2/projects/1092111331118/locations/global/catalogs/default_catalog/branches/2/products/"+ this.productID+"?access_token=ya29.a0AX9GBdWEn4GDJWOeKmhiOKIJDEivDqByyB1bUm9lPH6gvNkPzEsUXyDHv7-u_AtuZtDbxZ50DyLT_VqSI-8Q6XiADRHGLd3YOv0KRgcSxnapC4IDsSm-8P8JcMCH_r_pURBEh-pMXFoNoQizNIsecfgBOq3oDgaCgYKAfkSARASFQHUCsbC7krLxSXZk6Tq0cOZqdGqhA0165").subscribe(data=>{
      this.productData1 = data;
    })
  }

}
