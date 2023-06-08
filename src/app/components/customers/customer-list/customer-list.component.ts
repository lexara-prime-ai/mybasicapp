import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { Store } from '@ngrx/store';

import * as customerActions from '../state/customer.actions';
import { Customer } from '../customer.model';

@Component({
    selector: 'customer-list',
    templateUrl: 'customer-list.component.html',
    styleUrls: ['customer-list.component.css'],
    standalone: true,
    imports: [CommonModule, RouterModule]
}) 
export class ListCustomersComponent implements OnInit { 
    
    customers!: Customer[];

    constructor(private store: Store<any>) { }

    ngOnInit() {
        this.displayCustomers();
    }  

    displayCustomers() {
        this.store.dispatch(new customerActions.LoadCustomers());
        this.store.subscribe(state => (this.customers = state.customers.customers));
    }
}