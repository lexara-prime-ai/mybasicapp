import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as customerActions from '../state/customer.actions';
import * as fromCustomer from '../state/customer.reducer';
import { Customer } from '../customer.model';

@Component({
    selector: 'customer-list',
    templateUrl: 'customer-list.component.html',
    styleUrls: ['customer-list.component.css'],
    standalone: true,
    imports: [CommonModule, RouterModule]
})
export class ListCustomersComponent implements OnInit {

    customers$!: Observable<Customer[]>;
    error$!: Observable<string>;

    constructor(private store: Store<fromCustomer.AppState>) { }

    ngOnInit() {
        this.displayCustomers();
        this.error$ = this.store.pipe(select(fromCustomer.getError));
    }

    displayCustomers() {
        this.store.dispatch(new customerActions.LoadCustomers());
        this.customers$ = this.store.pipe(select(fromCustomer.getCustomers))
    }

    deleteCustomer(customer: Customer) {
        if (confirm("Are you sure you want to delete the user?")) {
            this.store.dispatch(new customerActions.DeleteCustomer(customer.id));
        }
    }

    editCustomer(customer: Customer) {
        this.store.dispatch(new customerActions.LoadCustomer(customer.id));
    }

}