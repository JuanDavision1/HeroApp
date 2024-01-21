import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Error404PageComponent } from './pages/error404Page/error404Page.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,Error404PageComponent
  ],
  exports:[Error404PageComponent]
})
export class SharedModule { }
