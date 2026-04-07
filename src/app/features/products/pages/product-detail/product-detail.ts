import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../../core/services/product';
import { Product } from '../../../../shared/models/product.model';
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.html'
})
export class ProductDetail implements OnInit {

  product!: Product;

  constructor(
    private route: ActivatedRoute,
    private service: ProductService,
    private cdr: ChangeDetectorRef
  ) {}

ngOnInit(): void {
  this.route.paramMap.subscribe(params => {
    const id = Number(params.get('id'));

    console.log('ID:', id);

    this.service.getById(id).subscribe(res => {
      console.log('PRODUTO:', res);
      this.product = res;
      this.cdr.detectChanges();
    });
  });
}
}