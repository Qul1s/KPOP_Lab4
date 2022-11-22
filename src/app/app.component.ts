import {Component, Output} from '@angular/core';

export class Item{
  name: string;
  salary: number;
  constructor(name: string,salary: number) {

    this.name = name;
    this.salary = salary;
  }
}

@Component({
  selector: 'my-app',
  templateUrl:'./app.component.html',
  styleUrls:['./app.component.css']

})
export class AppComponent {
  name:string="";
  salary:number = 0;
  Items: Item[] =
      [

      ];
  addItem(name: string, salary:number): void {
    if(name==null)
      return;
    this.Items.push(new Item(name,salary));
  }
}