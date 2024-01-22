import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  template: `
  <div class="banner">
   
    <div class="info">
    <h1>{{ 'About this Project ' | titlecase}}</h1>
    <p>{{'
This website lets you create your own superhero, one who represents your own values and beliefs.
With our tools and resources, you can bring your superhero to life. Share your creation with the world and inspire others to be heroes.'}} </p>
    <a id="banner_btn">Explore!</a>
    <button type="button" class="btn">Base class</button>
    <div></div>
    </div>

  </div>
  `,
  styleUrl: './banner.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BannerComponent { }
