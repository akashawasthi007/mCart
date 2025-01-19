import { Component, EventEmitter, Output } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-nested-component2',
  templateUrl: './nested-component2.component.html',
  styleUrls: ['./nested-component2.component.css']
})
export class NestedComponent2Component {

  // constructor(){
  //   this.updateQuantity(0,1);
  // }

deleteProduct(i: number) {
  const index = this.productArr.findIndex(product => product.id === i);
  if(i!==-1)
    this.productArr.splice(index,1);
}

  quant!: number;
  amount:number = 0;
  @Output() TotalSum = new EventEmitter<number>();

  productArr: Product[] = [
    new Product(100, "Mobile", 10000, 1),
    new Product(101, "Bag", 500, 1),
    new Product(102, "Shoe", 1000, 1),
    new Product(103, "Groceries", 700, 1),
    new Product(104, "Furniture", 15000, 1),
    new Product(105, "Laptop", 35000, 1)
];


  updateQuantity(i:number,quant:number)
  {
    this.amount=0;
    this.quant=quant;
    this.productArr[i].quantity=quant;
    for(const prod of this.productArr)
    {
      console.log(prod.price * prod.quantity)
      this.amount+=prod.price * prod.quantity;
    }  
    console.log('amount',this.amount);
    this.TotalSum.emit(this.amount);
  }

}
