import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'add-customer',
    templateUrl: 'customer-add.component.html',
    styleUrls: ['customer-add.component.css'],
    standalone: true,
    imports: [CommonModule, RouterModule]
})
export class AddCustomerComponent { 

}