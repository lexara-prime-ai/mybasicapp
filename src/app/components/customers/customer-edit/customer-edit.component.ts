import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import * as customerActions from '../state/customer.actions';
import * as fromCustomer from '../state/customer.reducer';
import { Customer } from '../customer.model';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
    selector: 'edit-customer',
    templateUrl: 'customer-edit.component.html',
    styleUrls: ['customer-edit.component.css'],
    standalone: true,
    imports: [CommonModule, RouterModule, ReactiveFormsModule]
})
export class EditCustomerComponent implements OnInit {
    customerForm!: FormGroup;

    constructor(private formBuilder: FormBuilder, private store: Store<fromCustomer.AppState>) { }

    ngOnInit() {
        this.customerForm = this.formBuilder.group({
            name: ['', Validators.required],
            phone: ['', Validators.required],
            address: ['', Validators.required],
            membership: ['', Validators.required],
            id: null
        });

        const customer$: Observable<any> = this.store.select(
            fromCustomer.getCurrentCustomer
        );

        customer$.subscribe(currentCustomer => {
            if (currentCustomer) {
                this.customerForm.patchValue({
                    name: currentCustomer.name,
                    phone: currentCustomer.phone,
                    address: currentCustomer.address,
                    membership: currentCustomer.membership,
                    id: currentCustomer.id
                });
            }
        })
    }

    updateCustomer() {
        const updatedCustomer: Customer = {
            name: this.customerForm.get("name")?.value,
            phone: this.customerForm.get("phone")?.value,
            address: this.customerForm.get("address")?.value,
            membership: this.customerForm.get("membership")?.value,
            id: this.customerForm.get("id")?.value
        }

        this.store.dispatch(new customerActions.UpdateCustomer(updatedCustomer));
    }


}