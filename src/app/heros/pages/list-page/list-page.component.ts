import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero.interface';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-list-page',
 
  templateUrl: './list-page.component.html',
  styleUrl: './list-page.component.css'
})
export class ListPageComponent implements OnInit{
  public heroesArr:Hero[]=[];
  constructor(private heroservice:HeroService){}
  ngOnInit(): void {
      this.heroservice.getheros().subscribe(heroes => this.heroesArr = heroes)
  }


}
