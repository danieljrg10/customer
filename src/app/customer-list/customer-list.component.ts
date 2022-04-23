import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css'],
})

/*
Componente que se encarga de mostrar el listado de customer

@author: Daniel.Rojas
*/
export class CustomerListComponent {
  @Input() customerList: string[];
}
