import { Component } from '@angular/core';

@Component({
  selector: 'app-food-price',
  templateUrl: './food-price.component.html',
  styleUrls: ['./food-price.component.scss']
})
export class FoodPriceComponent {

    value: number=1;

    foodItems = [
        {
            image: 'Idli',
            name: 'Idli',
            price: 70.00
        },
        {
            image: 'dosa',
            name: 'Dosa',
            price: 100.00
        },
        {
            image: 'puri',
            name: 'Puri',
            price: 60.00
        },
        {
            image: 'samosa',
            name: 'Samosa',
            price: 40.00
        },
        {
            image: 'sandwich',
            name: 'Sandwich',
            price: 70.00
        },
        {
            image: 'rolls',
            name: 'Veg Spring Rolls',
            price: 90.00
        },
        {
            image: 'milkshake',
            name: 'Chocolate Milkshake',
            price: 50.00
        },
        {
            image: 'coffee',
            name: 'Coffee',
            price: 30.00
        }
    ]

}
