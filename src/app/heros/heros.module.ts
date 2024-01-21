import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HerosRoutingModule } from './heros-routing.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { HeroPageComponent } from './pages/heroPage/heroPage.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { MaterialModule } from '../material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { HeroService } from './services/hero.service';
import { CardComponent } from './components/card/card.component';
import { HeroimagePipe } from './pipes/heroimage.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfirmdialogeComponent } from './components/confirmdialoge/confirmdialoge.component';
import { AuthService } from '../auth/services/auth.service';
import { BannerComponent } from './components/banner/banner.component';
import { HamburguermenuComponent } from './components/hamburguermenu/hamburguermenu.component';


@NgModule({
  declarations: [HeroPageComponent,BannerComponent,LayoutPageComponent,ListPageComponent,NewPageComponent,SearchPageComponent,CardComponent,HeroimagePipe,ConfirmdialogeComponent,HamburguermenuComponent],
  imports: [
    CommonModule,
    HerosRoutingModule,

    MaterialModule,HttpClientModule,ReactiveFormsModule,
  ],
  providers:[HeroService,AuthService]
})
export class HerosModule { }
