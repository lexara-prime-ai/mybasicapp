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

    getCustomerById(payload: number): Observable<Customer> {
        return this.http.get<Customer>(`${this.BASE_URL}/customers/${payload}`);
    }

    createCustomer(payload: Customer): Observable<Customer> {
        return this.http.post<Customer>(this.BASE_URL + '/customers', payload);
    }

    updateCustomer(customer: Customer): Observable<Customer> {
        return this.http.patch<Customer>(`${this.BASE_URL}/customers/${customer.id}`,
            customer
        );
    }

    deleteCustomer(payload: number) {
        return this.http.delete(`${this.BASE_URL}/customers/${payload}`);
    }
}