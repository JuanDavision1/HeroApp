import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthModule } from './auth/auth.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,SharedModule,HttpClientModule,AuthModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  title = 'Herosapp';

}
