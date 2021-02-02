import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private products = [
    {
      id: 1,
      name: 'Egg',
      category: 'Food',
      description: 'Lorem egg',
      price: 1
    },
    {
      id: 2,
      name: 'Milk',
      category: 'Drink',
      description: 'Lorem milk',
      price: 1.5
    },
    {
      id: 3,
      name: 'Coca Cola',
      category: 'Drink',
      description: 'Lorem coca cola',
      price: 2.5
    },
    {
      id: 4,
      name: 'Biscoff Cookies',
      category: 'Food',
      description: 'Lorem cookie',
      price: 2.5
    }
  ];

  getAllProducts() {
    return this.products;
  }

  getProductById(id) {
    return this.products.filter(product => product.id == id);
  }
}
