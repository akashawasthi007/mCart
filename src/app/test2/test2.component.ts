import { Component } from '@angular/core';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component {
  plHolder!:String;
  age!: number;
  currentYear!: number;
  constructor(){
    this.plHolder = "Enter your age";
  }
  findYear(val:number) {   
    console.log(val);
    this.currentYear = (new Date()).getFullYear();
    this.age = this.currentYear-val;
  //throw new Error('Method not implemented.');
  }  
  
}
