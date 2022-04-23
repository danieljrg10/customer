import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css'],
})

/*
Componente que permite agregar clientes al listado.

@author: Daniel.Rojas
*/
export class EditCustomerComponent {
  customerName: string = '';
  customerList: string[] = [];

  /*
Método que permite adicionar clientes al listado
*/

  addCustomer() {
    if (!!this.customerName) {
      this.customerList.push(this.customerName);
      this.limpiarInput();
    }
  }

  /*
Método que permite limpiar el input
  */
  limpiarInput() {
    this.customerName = '';
  }
}
