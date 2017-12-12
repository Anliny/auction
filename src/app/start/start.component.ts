import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  @Input()
  private  rating:number = 0;

  private stars:boolean[];



  constructor() { }

  ngOnInit() {
    this.stars = [];
    for(let i=1;i<=5;i++){
      console.log(i>this.rating);
      this.stars.push(i>this.rating);
      console.log(this.stars);
    }
  }

}
