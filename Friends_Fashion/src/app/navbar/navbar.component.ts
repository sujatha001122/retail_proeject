import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MegaMenuItem } from 'primeng/api';
import { BehaviorSubject, debounceTime, distinctUntilChanged, Observable, Subject } from 'rxjs';
import { Result } from '../models/product';
import { ProductserviceService } from '../services/productservice.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  results: Result[]=[];
  listData:any;
  userQuestion = new Subject<string>();
  items: MegaMenuItem[] = [];
  searchKey:string = "";
  searchKeyValue: BehaviorSubject<string>;
  sharedData: string;
  
  
 

  constructor(private productservice:ProductserviceService) {
    
    this.userQuestion.pipe(

      debounceTime(1000),

      distinctUntilChanged())

      .subscribe(value => {
        this.getproductSearch()
       

      });
      // this.searchKey=new BehaviorSubject()
  }
 

  ngOnInit(): void
  {
    this.items = [
      {
        label: 'MA_Fashion'
      },
      {
        label: 'Men',
        items: [
          [
            {
              label: 'Top Wear',
              items: [{ label: 'Brand 1' }, { label: 'Brand 2' }]
            },
            {
              label: 'Buttom Wear',
              items: [{ label: 'Brand 1' }, { label: 'Brand 2' }]
            },
          ],
          [
            {
              label: 'Foot Wear',
              items: [{ label: 'Brand 1' }, { label: 'Brand 2' }]
            },
          ]
        ]
      },
      {
        label: 'Women',
        items: [
          [
            {
              label: 'Brand ',
              items: [{ label: 'Brand 1' }, { label: 'Brand 2' }]
            },
            {
              label: 'Brand ',
              items: [{ label: 'Brand 1' }, { label: 'Brand 2' }]
            }
          ],
          [
            {
              label: 'Brand',
              items: [{ label: 'Brand 1' }, { label: 'Brand 2' }]
            },
           
          ]
        ]
      },
      {
        label: 'Kids',
        items: [
          [
            {
              label: 'Brand ',
              items: [{ label: 'Brand 1' }, { label: 'Brand 2' }]
            },
            {
              label: 'Brand ',
              items: [{ label: 'Brand 1' }, { label: 'Brand 2' }]
            }
          ],
          [
            {
              label: 'Brand',
              items: [{ label: 'Brand 1' }, { label: 'Brand 2' }]
            },
          ]
          
        ]
      },
    ]
    this.productservice.sharedData$.subscribe(sharedData  => this.sharedData = sharedData)
  }
  // updateData(){
  //   this.productservice.setData(this.searchKey);
  // }

  getproductSearch(){
  console.log(this.searchKey); 
    this.productservice.setData(this.searchKey);
    this.productservice.getproductSearch(this.searchKey).subscribe((Response)=>{
      this.productservice.listData = Response;
    });
      //const keyword = name.target.value;
      // let prod=this.productservice?.listData?.facets;
      
      // console.log(prod);

  }
 
  
  
  
}


