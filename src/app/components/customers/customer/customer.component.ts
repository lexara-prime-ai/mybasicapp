import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AddCustomerComponent } from "../customer-add/customer-add.component";
import { EditCustomerComponent } from '../customer-edit/customer-edit.component';
import { ListCustomersComponent } from '../customer-list/customer-list.component';

@Component({
    selector: 'customer',
    templateUrl: 'customer.component.html',
    styleUrls: ['customer.component.css'],
    standalone: true,
    imports: [CommonModule, RouterModule, AddCustomerComponent, EditCustomerComponent, ListCustomersComponent]
})
export class CustomerComponent { 

}