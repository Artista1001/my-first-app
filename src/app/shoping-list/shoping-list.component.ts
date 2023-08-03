import { Component } from '@angular/core';
import { Ingredients } from '../shared/ingredient.model';
@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.css']
})
export class ShopingListComponent {
  ingredients: Ingredients[] = [
    new Ingredients('Apples',50),
    new Ingredients('Tomatoes',200),
  ];


}
