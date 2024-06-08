import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Product, Result  } from '../models/product';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class ProductserviceService {
  filter: Result[];
  shareData: any;
  constructor( private http: HttpClient) { }

  products: Product[] = [];
  results: Result[] = [];
  listData : any;

private sharedData:Subject<any> = new Subject<any>();
private updateproduct: string;
sharedData$: Observable<any>=this.sharedData.asObservable();

//  (observe handling multiple values)
//  getProducts():Observable<any> {
//  const product = this.products.filter(product =>product.category === category )[0];
//  return this.http.get<Product>('../assets/metadata/product.json').pipe(map((user)=>user))
//  let url="https://retail.googleapis.com/v2/projects/1092111331118/locations/global/catalogs/default_catalog/branches/2/products?pageSize=1000&access_token=ya29.a0AeTM1icZ-XllT-5jKkErpSyxPlD89TNSanhqwZua3kyj50xhdV2NcTcCszizND_5ehKURm03QzjzqSoBy7RQULgZmoQs8Rpo-ypwcSqxulGi5hHI_gRkqoyxsroEFCtFA53Tvx3_6uDswcBWKBY09Bu6Oe8MUgaCgYKAb4SARESFQHWtWOm9OVD_29W5plbSQ-fVqr6gg0165";
//  return this.http.get(url);
// }

setData(updatedData: any) {
  this.sharedData.next(updatedData);
  this.updateproduct=updatedData;
}

getProductFromApi():Observable<any> {
  let url = "https://retail.googleapis.com/v2/projects/1092111331118/locations/global/catalogs/default_catalog/branches/2/products?access_token=ya29.a0AX9GBdU8pZUm7zGHmC7EtlOuqF11DP0QF3Zz7yinyKsJW7Og4BxnALPwGfUd4AmYfG43WFNTf90KTOUIXLiEy8R4fj45NfvaczT7nhiXr_PVNfIqgX5MqV5nBWzmqJrq0OUHQ2CCqQ4pW02PRRs-LjYoO4lmyAaCgYKAf4SARASFQHUCsbCCRqBgpCiqIZVXPYZd3Udhw0165";
  return this.http.get<Product[]>(url);
}

getFilterforProductSelected(selectedid:string):Observable<any> {
  let params1 =  new HttpParams().set('id',selectedid);
  return this.http.get("https://retail.googleapis.com/v2/projects/1092111331118/locations/global/catalogs/default_catalog/branches/2/products?pageSize=1000&access_token=ya29.a0AX9GBdU8pZUm7zGHmC7EtlOuqF11DP0QF3Zz7yinyKsJW7Og4BxnALPwGfUd4AmYfG43WFNTf90KTOUIXLiEy8R4fj45NfvaczT7nhiXr_PVNfIqgX5MqV5nBWzmqJrq0OUHQ2CCqQ4pW02PRRs-LjYoO4lmyAaCgYKAf4SARASFQHUCsbCCRqBgpCiqIZVXPYZd3Udhw0165",
  {params:params1}); 
}

public getproductSearch(searchKey:string):Observable<Result[]> {
  const headers = new HttpHeaders().append('content-type','application/JSON');
  const body = 
    {
      "query": searchKey,
      "branch": "projects/1092111331118/locations/global/catalogs/default_catalog/branches/0",
      "dynamicFacetSpec": {
        "mode": "ENABLED" 
      },
      "facetSpecs": [
        
        {
          "facetKey": {
            "key": "sizes"
          }
        },
        {
          "facetKey": {
            "key": "brands"
          }
        },

      ],
      "offset": 0,
      "pageSize": 10,
      "visitorId": "430e3127-7ac9-3f77-3e5e-8921ba4402de",
      "searchMode": "SEARCH_MODE_UNSPECIFIED"
    };
  // const params = new HttpParams().append('query','strits').append('brand','roadster');
  return this.http.post<Result[]>
  ("https://retail.googleapis.com/v2/projects/1092111331118/locations/global/catalogs/default_catalog/placements/default_search:search?access_token=ya29.a0AX9GBdVDVWqMdR8rD2RvOcrepkJ7xgJ3e8kh0tVUj0WzdM5tFvEhCp_lIbRq6ORzdBSjaOMmN66itdj1sC8ZHU04yNSXuGtwkfMWF5p9fLjSa9ttQCgNx-WXHMKw3NcuU3tBjlSq7sqTS_0721U98FuQkuAgpwaCgYKAfcSARASFQHUCsbCICxReSiaHRUGvHmZTLZCyg0165", body,{
    headers: headers
  });
  // const url="https://retail.googleapis.com/v2/projects/1092111331118/locations/global/catalogs/default_catalog/placements/default_search:search?access_token=ya29.a0AX9GBdWupTZ6l9e9-r25RLEl2PaG3FYX3VLroBT2ahWQqKKC7G5vxf4kNJ7_DYJnerCWmyT2I-L7FHTtGQd__7uPaSRp9coAr3y6PyDgUsyOu-BONtsGeGUxKMgKehnpKTHRakrxIQdjBXublyjsEpuzpYf5dQaCgYKAYYSARESFQHUCsbCbDMYIhBhXE-SrO1GVeUALw0165";
  // return this.http.post<Result[]>(url,results);
}

public getproductFilter(key:string,searchKey: string,updateproduct:string):Observable<Result[]> {
  const headers = new HttpHeaders().append('content-type','application/JSON');
  console.log(updateproduct)
  const body = 
    {
      "query": updateproduct,
      "branch":"projects/1092111331118/locations/global/catalogs/default_catalog/branches/0",
      "dynamicFacetSpec": { "mode": "ENABLED" },
      "facetSpecs": [
        {
          "facetKey": {
            "key": "sizes"
          }
        },
        {
          "facetKey": {
            "key": "brands"
          }
        },

      ],
      "filter":this.filterQuery(key, searchKey),
      "offset": 0,
      "pageSize": 10,
      "visitorId": "430e3127-7ac9-3f77-3e5e-8921ba4402de",
      "searchMode": "SEARCH_MODE_UNSPECIFIED"
  };
  // const params = new HttpParams().append('query','strits').append('brand','roadster');
  return this.http.post<Result[]>
  ("https://retail.googleapis.com/v2/projects/1092111331118/locations/global/catalogs/default_catalog/placements/default_search:search?access_token=ya29.a0AX9GBdVDVWqMdR8rD2RvOcrepkJ7xgJ3e8kh0tVUj0WzdM5tFvEhCp_lIbRq6ORzdBSjaOMmN66itdj1sC8ZHU04yNSXuGtwkfMWF5p9fLjSa9ttQCgNx-WXHMKw3NcuU3tBjlSq7sqTS_0721U98FuQkuAgpwaCgYKAfcSARASFQHUCsbCICxReSiaHRUGvHmZTLZCyg0165", 
  body,{
    headers: headers
  });
}

private filterQuery (key: string, searchKey: string) {
  // if one filter is selected
  // if two or more filter is selected
  // with in brand two selections
  // two or more filters query should be contructed with repective clause(AND, OR)

  return `${key}: ANY(${JSON.stringify(searchKey)})`;

}
}

      