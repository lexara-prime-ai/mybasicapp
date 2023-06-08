import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'edit-customer',
    templateUrl: 'customer-edit.component.html',
    styleUrls: ['customer-edit.component.css'],
    standalone: true,
    imports: [CommonModule, RouterModule]
})
export class EditCustomerComponent { 

}