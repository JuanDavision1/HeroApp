import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-hamburguermenu',
  template: `<button mat-button [matMenuTriggerFor]="menu"><img src="../../../../assets/aplicaciones-anadir.png" alt="aplicaciones-anadir"></button>
  <mat-menu #menu="matMenu">
    <button mat-menu-item *ngFor="let item of menuItems" [routerLink]="item.link">{{ item.label }}</button>

  </mat-menu>`,
  styleUrl: './hamburguermenu.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HamburguermenuComponent { 
public menuItems=[
  {label:'Listado',link:'./List'},
  {label:'Añadir',link:'./new_hero'},
  {label:'Buscado',link:'./Search'}
]


}
