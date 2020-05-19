import { Component, OnInit } from '@angular/core';
import { departments, products } from '../../../data/data';
import { from } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { ProductsInterface } from '../../../interfaces/ecommerce.interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-zapateria',
  templateUrl: './zapateria.component.html',
  styleUrls: ['./zapateria.component.css'],
})
export class ZapateriaComponent implements OnInit {
  public productsShow: Array<ProductsInterface> = [];

  constructor(private router: Router) {
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

  public getIdZapateria(id: number) {
    this.router.navigate(['info', id]);
  }
}
