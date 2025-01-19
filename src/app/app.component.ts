import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
msg!:string;
title = 'mCart';
quant!:number;
totalSum(quant: number) {
  this.quant = quant;
  console.log( 'get value form child ',quant);
  if(quant > 100000)
    this.msg = 'You are eligible for discount';
  else
    this.msg='';
  }
}
