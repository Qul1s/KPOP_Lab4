import { Component } from '@angular/core';


@Component({
  selector: 'my-app',
  template: `<label>Введіть строку:  </label>
  <input [(ngModel)]="name">
  <h1>Перевернута строка: {{reverseString(name)}}!</h1>`
})
export class AppComponent {
  name= '';
  reverseString(str: String) {
    var splitString = str.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    return str.split("").reverse().join("");
  }
}



