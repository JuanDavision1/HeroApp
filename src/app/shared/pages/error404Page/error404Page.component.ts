import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-error404-page',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>error404Page works!</p>`,
  styleUrl: './error404Page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Error404PageComponent { }
