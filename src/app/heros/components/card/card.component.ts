import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Renderer2,
  Input,
  OnInit,
} from '@angular/core';
import { Hero } from '../../interfaces/hero.interface';
import { HeroimagePipe } from '../../pipes/heroimage.pipe';

@Component({
  selector: 'heroes-hero-card',
  template: `

<div>
<div class="main_card">
      <div class="header">
          <h4>{{ herohijo.superhero }}</h4>
          <p>{{ herohijo.alter_ego }}</p>
      </div>
      <div class="body_card">
      <h4>{{ herohijo.publisher }}</h4>
        <p>
          <strong>Primera aparicion: </strong>{{ herohijo.first_appearance }}
          <span
            *ngFor="let item of herohijo.characters.split(',') | slice : 0 : 3"
          >
            {{ item }}
          </span>
        </p>
      </div>
        <div class="actions">
        <button
            [routerLink]="['/heroes/Edit', herohijo.id]"
          >
            <mat-icon>edit</mat-icon>
            Editar
          </button>
          <span class="spacer"></span>
          <button [routerLink]="['/heroes', herohijo.id]">
            <mat-icon>more_horiz</mat-icon>
            Mas
          </button>
        </div>
    </div>
</div>

  `,
  styleUrl: './card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent implements OnInit {
  @Input()
  public herohijo!: Hero;
  public mipipe = new  HeroimagePipe();

  constructor(private ref:ElementRef, private render:Renderer2){}

  ngOnInit(): void {
    if (!this.herohijo) throw Error('No existe');
    const card_general:HTMLElement = this.ref.nativeElement;
    const imgUrl= this.mipipe.transform(this.herohijo)
    console.log(imgUrl)
    this.render.setStyle(card_general,'background-image',`url("../../../../${imgUrl}")`);
    this.render.setStyle(card_general,'background-repeat','no-repeat');
    this.render.setStyle(card_general,'background-size','contain');
    this.render.setStyle(card_general,'background-position','center center');
  }

 
}
