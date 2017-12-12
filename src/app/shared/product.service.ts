import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

  constructor() { }



}
export class Product{
    constructor(
        public id:number,
        public title:string,
        public price:number,
        public rating:number,
        public desc:string,
        public imgSrc:string,
        public categories:Array<string>
    ){}
}