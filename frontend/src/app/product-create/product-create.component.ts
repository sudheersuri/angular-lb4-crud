import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit {
 
  constructor(private productService:ProductService) { }
  //complete the product form 
  product:Product = {
    name: '',
    price: 0,
    desc: ''
  };
  
  onSubmit() {
    // Here you can perform actions like sending the data to a server or handling it locally.
    this.productService.createProduct(this.product);
    // You can also reset the form fields if needed.
    this.product = {
      name: '',
      price: 0,
      desc: ''
    };
  }
  
  ngOnInit(): void {
    
  }
}
