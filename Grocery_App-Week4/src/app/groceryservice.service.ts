import { Injectable } from '@angular/core';
import { Grocery } from './grocery';

@Injectable({
  providedIn: 'root'
})
export class GroceryserviceService {

  constructor() { }

  groceryList: Grocery[] = [];

  getGroceryList() {
    return this.groceryList;
  }

  addGrocery(grocery: Grocery) {
    this.groceryList.push(grocery);
  }

  deleteGrocery(grocery: Grocery) {
    const index = this.groceryList.indexOf(grocery);
    if (index > -1) {
      this.groceryList.splice(index, 1);
    }
  }

  editGrocery(grocery: Grocery, index: number) {
    this.groceryList[index] = grocery;
  }
}
