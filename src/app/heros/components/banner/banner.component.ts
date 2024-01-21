import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  template: `
  <div class="banner">
    <div></div>
    <div class="info">
    <h1>sdfsdfdsfdfsdfsdf </h1>
    <p>sdfsdfsfsf </p>
    <button>vbn</button>
    </div>

  </div>
  `,
  styleUrl: './banner.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BannerComponent { }
