import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private productService: ProductService,
    private modal: NgbModal
  ) { }
  products: Product[] = [];
  product = {
    id:0,
    name: '',
    price: 0,
    desc: ''
  };
  modalRef:any;

  editProduct(product:any, editModal:any){
    this.product = Object.assign(this.product,product);
    this.modalRef = editModal;
    this.modal.open(editModal, { ariaLabelledBy: 'modal-basic-title' });
  }
  deleteProduct(product:Product){
   
    if(product?.id)
    this.productService.deleteProduct(product.id);
  }
  onSubmit() {
    this.productService.updateProduct(this.product);
    this.product = {
      id:0,
      name: '',
      price: 0,
      desc: ''
    };
    this.modal.dismissAll();
  
  }
  loadProducts()
  {
    this.productService.getProducts();
  }
  ngOnInit(): void {
    this.productService.products$.subscribe((products:Product[])=>this.products = products);
    this.loadProducts();
  }

}
