import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { Store } from '@ngrx/store';

@Component({
    selector: 'customer-list',
    templateUrl: 'customer-list.component.html',
    styleUrls: ['customer-list.component.css'],
    standalone: true,
    imports: [CommonModule, RouterModule]
}) 
export class ListCustomersComponent implements OnInit { 
    
    customers: any;

    constructor(private store: Store<any>) { }

    ngOnInit() {
        this.displayCustomers();
    }  

    displayCustomers() {
        this.store.dispatch({type: 'LOAD CUSTOMERS'});
        this.store.subscribe(state => (this.customers = state.customers.customers));
    }
}