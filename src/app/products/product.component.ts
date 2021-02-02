import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  template: `
    <h2>
      <b>Name:</b>&nbsp;<a [routerLink]="['/product', product.id]">{{ product.name }}</a>
    </h2>
    <div><b>Price:</b>&nbsp;{{ product.price }}</div>
  `
})
export class ProductComponent {
  @Input() product;
}
