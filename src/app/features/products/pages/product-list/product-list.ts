import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../../core/services/product';
import { Product } from '../../../../shared/models/product.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-list.html'
})
export class ProductList implements OnInit {

  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getAll().subscribe(res => {
      this.products = res;
    });
    console.log(this.products);
  }
}