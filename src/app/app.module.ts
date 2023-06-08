import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from "./components/navbar/navbar.component";
import { HomeComponent } from './components/home/home.component';
import { CustomerComponent } from './components/customers/customer/customer.component';
import { AddCustomerComponent } from './components/customers/customer-add/customer-add.component';
import { EditCustomerComponent } from './components/customers/customer-edit/customer-edit.component';
import { ListCustomersComponent } from './components/customers/customer-list/customer-list.component';
import { CustomerService } from './components/customers/customer.service';

@NgModule({
    declarations: [
        AppComponent
    ],
    providers: [CustomerService],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        StoreModule.forRoot({}),
        StoreDevtoolsModule.instrument(),
        EffectsModule.forRoot({}),
        HttpClientModule,
        NavBarComponent,
        HomeComponent,
        CustomerComponent,
        AddCustomerComponent,
        EditCustomerComponent,
        ListCustomersComponent
    ]
})
export class AppModule { }


