import { Injectable } from '@angular/core';
import { IChangeProduct, IProduct } from '@interfaces/product.interface';
import { AppService } from '@services/app.service';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  isOpen = new Subject<boolean>();
  productChange = new Subject<IChangeProduct>()
  url = `${environment.apiURL}/products`

  constructor(
    private _appService: AppService,
  ) {}

  getListProducts() {
    return this._appService.get(this.url)
  }

  addNewProduct(product: IProduct) {
    return this._appService.post(this.url, product)
  }

  updateProduct(product: IProduct, id: string) {
    const url =  `${this.url}/${id}`
    return this._appService.put(url, product)
  }

  removeProduct(id: string) {
    const url =  `${this.url}/${id}`
    return this._appService.delete(url)
  }
}
