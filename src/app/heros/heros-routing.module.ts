import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { HeroPageComponent } from './pages/heroPage/heroPage.component';

const routes: Routes = [
  {
    path:'',
    component:LayoutPageComponent,
    children:[
      {path:'new_hero',component:NewPageComponent},
      {path:'Search',component:SearchPageComponent},
      {path:'Edit/:id',component:NewPageComponent},
      {path:'List',component:ListPageComponent},
      {path:':id',component:HeroPageComponent},
      {path:'**',redirectTo:'List'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HerosRoutingModule { }
