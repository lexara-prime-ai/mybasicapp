import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'navbar',
    templateUrl: 'navbar.component.html',
    styleUrls: ['navbar.component.css'],
    standalone: true,
    imports: [CommonModule, RouterModule]
})
export class NavBarComponent { 

}