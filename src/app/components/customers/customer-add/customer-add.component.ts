import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import * as customerActions from '../state/customer.actions';
import * as fromCustomer from '../state/customer.reducer';
import { Customer } from '../customer.model';
import { Store } from '@ngrx/store';

@Component({
    selector: 'add-customer',
    templateUrl: 'customer-add.component.html',
    styleUrls: ['customer-add.component.css'],
    standalone: true,
    imports: [CommonModule, RouterModule, ReactiveFormsModule,]
})
export class AddCustomerComponent implements OnInit { 
    customerForm!: FormGroup;

    constructor(private formBuilder: FormBuilder, private store: Store<fromCustomer.AppState>) { }

    ngOnInit() {
        this.customerForm = this.formBuilder.group({
            name: ['', Validators.required],
            phone: ['', Validators.required],
            address: ['', Validators.required],
            membership: ['', Validators.required]
        });
    }

    createCustomer() {
        const newCustomer: any = {
            name: this.customerForm.get("name")?.value,
            phone: this.customerForm.get("phone")?.value,
            address: this.customerForm.get("address")?.value,
            membership: this.customerForm.get("membership")?.value,
        };

        this.store.dispatch(new customerActions.CreateCustomer(newCustomer));

        this.customerForm.reset();
    }



}