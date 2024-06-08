import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Result } from 'src/app/models/product';
import { NavbarComponent } from 'src/app/navbar/navbar.component';
import { ProductserviceService } from 'src/app/services/productservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-searchitem',
  templateUrl: './searchitem.component.html',
  styleUrls: ['./searchitem.component.css'],
  encapsulation: ViewEncapsulation.None,


})
export class SearchitemComponent implements OnInit {
  results: Result[];
  listData: any;
  ProductSelected: number;
  sharedData: string;
searchKey: any;


  constructor(public productservice: ProductserviceService, private activerouter: ActivatedRoute) { }

  ngOnInit(): void {
    
  }
  
  getproductFilter(key: string, selectedValue: string) {
    this.productservice.sharedData$.subscribe(sharedData => {
      this.sharedData=sharedData
    });
    this.productservice.getproductFilter(key, selectedValue,this.sharedData).subscribe((Response) => {
      this.productservice.listData = Response;

    })
  }
}
