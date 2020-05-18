import { Component, OnInit } from '@angular/core';
import { ProductsInterface } from '../../../interfaces/ecommerce.interfaces';
import { from } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { products, departments } from '../../../data/data';

@Component({
  selector: 'app-bebe',
  templateUrl: './bebe.component.html',
  styleUrls: ['./bebe.component.css'],
})
export class BebeComponent implements OnInit {
  public productsShow: Array<ProductsInterface> = [];

  constructor() {
    this.GetProducts();
  }

  ngOnInit(): void {}

  public GetProducts() {
    let Departamento = departments.find(
      (departamento) => departamento.department === 'Bebé'
    );

    from(products)
      .pipe(
        filter((producto) => producto.department === Departamento.id),
        map((producto) => {
          let direccionImg = `./../../../../${producto.img}`;
          return {
            ...producto,
            img: direccionImg,
          };
        }),
        tap((productoActualizado) =>
          this.productsShow.push(productoActualizado)
        )
      )
      .subscribe();
  }
}
