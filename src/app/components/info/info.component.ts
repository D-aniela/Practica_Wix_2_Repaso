import { Component, OnInit } from '@angular/core';
import { ProductsInterface } from '../../interfaces/ecommerce.interfaces';
import { ActivatedRoute } from '@angular/router';
import { pluck, switchMap, filter, map } from 'rxjs/operators';
import { from } from 'rxjs';
import { products } from '../../data/data';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
})
export class InfoComponent implements OnInit {
  public mostrar = false;
  public producto: ProductsInterface;

  constructor(private AR: ActivatedRoute) {
    this.AR.params
      .pipe(
        pluck('id'),
        switchMap((id) => this.GetProduct(id))
      )
      .subscribe((valor) => (this.producto = valor));

      window.scrollTo(0, 0);

  }

  ngOnInit(): void {}

  public GetProduct(id: number) {
    return from(products).pipe(
      filter((producto) => producto.id == id),
      map((producto) => ({
        ...producto,
        img: `./../../../../${producto.img}`,
      }))
    );
  }

  
}
