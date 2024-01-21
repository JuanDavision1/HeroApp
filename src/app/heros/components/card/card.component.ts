import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'heroes-hero-card',
  template: `

<mat-card>
  <mat-card-header>
    <mat-card-title>{{herohijo.superhero}}</mat-card-title>
    <mat-card-subtitle>{{herohijo.alter_ego}}</mat-card-subtitle>
  </mat-card-header>

  <img mat-card-image [src]="herohijo | Heroimage"  [alt]="herohijo.superhero">
<mat-card-content class="mt-2">
  <h4>{{herohijo.publisher}}</h4>
  <p>
    <strong>Primera aparicion: </strong>{{herohijo.first_appearance}}
    <br>
     
<span *ngFor="let item of herohijo.characters.split(',') | slice:0:3 ">
{{item}}
</span>
  
  </p>

</mat-card-content>
<mat-divider></mat-divider>
<mat-card-actions>
  <button mat-button
   mat-raised
   color="primary"
   [routerLink]="['/heroes/Edit',herohijo.id]">
    <mat-icon>edit</mat-icon>
    Editar
  </button>
  <span class="spacer"></span>
  <button mat-button
   mat-raised
 
   [routerLink]="['/heroes',herohijo.id]">
    <mat-icon>more_horiz</mat-icon>
    Mas
  </button>
</mat-card-actions>
</mat-card>  


`,
  styleUrl: './card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent implements OnInit{ 

@Input()
public herohijo!: Hero;
ngOnInit(): void {
      if(!this.herohijo)throw Error('No existe')
}
}
