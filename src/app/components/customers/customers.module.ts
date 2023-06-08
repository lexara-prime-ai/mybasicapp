import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { StoreModule } from '@ngrx/store';
import { EffectsModule, Actions } from '@ngrx/effects';
import { CustomerEffect } from './state/customer.effect';

import { customerReducer } from './state/customer.reducer';

import { CustomerComponent } from './customer/customer.component';
import { AddCustomerComponent } from './customer-add/customer-add.component';
import { EditCustomerComponent } from './customer-edit/customer-edit.component';
import { ListCustomersComponent } from './customer-list/customer-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const customerRoutes = [{ path: "", component: CustomerComponent }];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        CustomerComponent,
        AddCustomerComponent,
        EditCustomerComponent,
        ListCustomersComponent,
        RouterModule.forChild(customerRoutes),
        StoreModule.forFeature("customers", customerReducer),
        EffectsModule.forFeature(CustomerEffect)
    ],
    declarations: []
})
export class CustomerModule { }
