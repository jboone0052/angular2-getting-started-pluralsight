import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    moduleId: module.id,
    selector: 'pm-products',
    templateUrl: 'product-list.component.html',
    styleUrls: ['product-list.component.css']
})
export class ProductListComponent implements OnInit {
    constructor(private _productService: ProductService) { }

    ngOnInit() {
        this.products = this._productService.getProduct();
     }

    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string;
    products: IProduct[];
    

    toggleImage(){
        this.showImage = !this.showImage;
    }

    onRatingClicked(message: string) {
        console.log(message);
    }
}
