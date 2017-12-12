import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  // private products:Array<Product>;

  constructor() { }

  ngOnInit() {

    // this.products = [
    //   new Product(1,"第一个商品",1.96,1.5,"这是我自己创建的一个商品","http://placehold.it/320x150",["软件类","硬件设施"]),
    //   new Product(2,"第二个商品",2.6,2.5,"这是我自己创建的一个商品","http://placehold.it/320x150",["软件类1","硬件设施1"]),
    //   new Product(3,"第三个商品",3.52,3.5,"这是我自己创建的一个商品","http://placehold.it/320x150",["软件类2","硬件设施2"]),
    //   new Product(4,"第四个商品",13.6,4.5,"这是我自己创建的一个商品","http://placehold.it/320x150",["软件类3","硬件设施4"]),
    //   new Product(5,"第五个商品",1.36,4.5,"这是我自己创建的一个商品","http://placehold.it/320x150",["软件类4","硬件设施5"]),
    //   new Product(6,"第六个商品",46.52,3,"这是我自己创建的一个商品","http://placehold.it/320x150",["软件类5","硬件设施6"]),
    //   new Product(7,"第七个商品",1.6,2,"这是我自己创建的一个商品","http://placehold.it/320x150",["软件类6","硬件设施7"])
    // ];

  }

}


