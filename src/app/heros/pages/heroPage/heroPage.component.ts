import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { HeroService } from '../../services/hero.service';
import { ActivatedRoute } from '@angular/router';
import {  switchMap } from 'rxjs';
import { Router } from '@angular/router';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-hero-page',
 
  template: `
  
 
 <ng-template #divloading>
<mat-grid-list cols="1">
  <mat-grid-tile>
    <mat-spinner> </mat-spinner>
  </mat-grid-tile>
</mat-grid-list>
 </ng-template>
 <div class="grid mt-2 p-2" *ngIf="hero; else divloading">
 <mat-card class="col-12 sm:col-6">
 <mat-card-header>
    <mat-card-title>{{hero.alter_ego}}</mat-card-title>
    <mat-card-subtitle>{{hero.superhero}}</mat-card-subtitle>
  </mat-card-header>
  <img [src]="hero | Heroimage " [alt]="hero.superhero" mat-card-image> 

 </mat-card>
 <mat-card class="col-12 sm:col-6">
 <mat-card-header>
    <mat-card-title>Informacion</mat-card-title>
    <mat-card-subtitle>{{hero.superhero}}</mat-card-subtitle>
  </mat-card-header>
<mat-card-content>
  <mat-list>
    <mat-list-item>{{hero.first_appearance}}</mat-list-item>
    <mat-list-item>{{hero.characters}}</mat-list-item>
    <mat-list-item>{{hero.publisher}}</mat-list-item>
    <mat-list-item>{{hero.alter_ego}}</mat-list-item>
  </mat-list>
  <button mat-button color="warn" (click)="goback()">
Regresar
  </button>
</mat-card-content>
 </mat-card>
 </div>

  `,
  styleUrl: './heroPage.component.css'
})
export class HeroPageComponent implements OnInit{
  public hero?:Hero;
  constructor( private heroesService:HeroService, private activatedRote:ActivatedRoute,private roter:Router){}
  ngOnInit(): void {
    this.activatedRote.params
    .pipe(

      switchMap(({id})=> this.heroesService.getheroId(id))
    ).subscribe(hero=>{
   if(!hero) return  this.roter.navigate(['/heroes/List'])
   this.hero = hero;
  return
    })
     
  } 
  goback():void{
    this.roter.navigateByUrl('heroes/List')

  }
 
}