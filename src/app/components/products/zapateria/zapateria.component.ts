import { Component, OnInit } from '@angular/core';
import { departments, products } from '../../../data/data';
import { from } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { ProductsInterface } from '../../../interfaces/ecommerce.interfaces';

@Component({
  selector: 'app-zapateria',
  templateUrl: './zapateria.component.html',
  styleUrls: ['./zapateria.component.css'],
})
export class ZapateriaComponent implements OnInit {
  public productsShow: Array<ProductsInterface> = [];

  constructor() {
    this.GetProducts();
  }

  ngOnInit(): void {}

  public GetProducts() {
    let Departamento = departments.find(
      (departamento) => departamento.department === 'Zapatería'
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
