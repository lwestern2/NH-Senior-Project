import { Component } from '@angular/core';
import { PLATFORM_ID, APP_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'NH';

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_ID) private appId: string
  ) {}
 
  onActivate(event: any) {
    window.scroll(0,0);
    // if (isPlatformBrowser(this.platformId)) {
    //   let scrollToTop = window.setInterval(() => {
    //     let pos = window.pageYOffset;
    //     if (pos > 0) {
    //       window.scrollTo(0, pos - 50); // how far to scroll on each step
    //     } else {
    //       window.clearInterval(scrollToTop);
    //     }
    //   }, 16);
    // }
  }
}
