import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-layout-page',
  template: `
  <div class="grid p-3">
    <div class="col-12 mt-5 md:col-6 md:col-offset-3 md:mt-8">
 <router-outlet></router-outlet> 
    </div>
  </div>

    
    
    `,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutPageComponent {}
