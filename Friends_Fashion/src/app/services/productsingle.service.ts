import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Productsingle  } from '../models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductsingleService {

  constructor(private http: HttpClient) { }

  productsingle: Productsingle[] = [];
  
getProductsingle(): Observable<any>
{
  let url = "https://therichpost.com/testjsonapi/products/";
  return this.http.get(url);
}

}
