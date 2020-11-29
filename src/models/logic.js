export class Logic {
    constructor(){
        this.products = [
            {ProductId:101, ProductName:"Laptop",
           CategoryName:"ECT", Manufacturer:"HP",
          Description: "Gaming", BasePrice:100000},
          {ProductId:102, ProductName:"Iron",
          CategoryName:"ECL", Manufacturer:"Bajaj",
         Description: "Home-Cloths", BasePrice:3000}
        ];
    }

    getProducts(){
        return this.products;
    }
    addProduct(prd){
        this.products.push(prd);
        return this.products;
    }
}