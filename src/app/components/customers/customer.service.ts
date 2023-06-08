import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './customer.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CustomerService { 
    private BASE_URL = `http://localhost:3000`;

    constructor(private http: HttpClient) { }

    getCustomers(): Observable<Customer[]> {
        return this.http.get<Customer[]>(this.BASE_URL + '/customers');
    }
}