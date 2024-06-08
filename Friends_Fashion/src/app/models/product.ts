export interface PriceInfo{
    currencyCode?:string;
    originalPrice?: number;
    price?: number;
}
export interface Image{
    height?: number;
    uri?: string;
    width?: number;

}

export interface Filter{
    id?: string;
    brands?: string;
    
}
export interface Product {
    brands?:string[];
    id?:string;
    query?:string;
    brand?:string;
    images?: Image[];
    name?:string;
    priceInfo?: PriceInfo;
    title?:string;
     // code?:string;
    // name?:string;
    // description?:string;
    // price?:number;
    // quantity?:number;
    // inventoryStatus?:string;
    // category?:string;
    // image?:string;
    // rating?:number;
}

// export interface ProductInter {
//     data:Product[];
// }
export interface Productsingle {
    id?:string;
    Product_title?:string;
    product_price?:number;
    product_image?:string;
    product_description?:string;

}

export interface Result{
    checked: unknown;
    id?:string;
    product?:string;
    name?:string;
    facets?:Facets[];
    filter?: string;

}
export interface Facets{
    key?:string;
    values?: Values[];
}
export interface Values{
    value?:string;
    count?: number;
}