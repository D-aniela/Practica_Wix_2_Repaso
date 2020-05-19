import { Component, OnInit } from '@angular/core';
import { ProductsInterface } from 'src/app/interfaces/ecommerce.interfaces';
import { departments, products } from '../../../data/data';
import { from } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ella',
  templateUrl: './ella.component.html',
  styleUrls: ['./ella.component.css'],
})
export class EllaComponent implements OnInit {
  public productsShow: Array<ProductsInterface> = [];

  constructor(private router: Router) {
    this.GetProducts();
  }

  ngOnInit(): void {}

  public GetProducts() {
    let Departamento = departments.find(
      (departamento) => departamento.department === 'Ella'
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

  public getIdElla(id:number){
    this.router.navigate(['info', id])
  }
}
