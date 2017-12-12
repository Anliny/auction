import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  public productTitle:string;

  // 构造函数
  constructor(private routeInfo:ActivatedRoute) { }

  ngOnInit() {

      // 参数快照
      this.productTitle = this.routeInfo.snapshot.params["prodTitle"];

  }

}
