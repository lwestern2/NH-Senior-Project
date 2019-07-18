import {
  Component,
  OnInit
} from '@angular/core';
import {
  NgxGalleryOptions,
  NgxGalleryImage,
  NgxGalleryAnimation
} from 'ngx-gallery';

@Component({
  selector: 'app-apt',
  templateUrl: './apt.component.html',
  styleUrls: ['./apt.component.scss']
})
export class AptComponent implements OnInit {
  blockText = "All housing options at Nauvoo House apartments are for shared bedrooms. Sign up early for discounts!";
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor() {}

  ngOnInit() {
    this.galleryOptions = [{
        "imageAutoPlay": true,
        "imageAutoPlayPauseOnHover": true,
        "previewAutoPlay": true,
        "previewAutoPlayPauseOnHover": true,
        "previewFullscreen": true,
        "previewKeyboardNavigation": true
      },
      {
        width: '480px',
        height: '355px',
        imageAnimation: NgxGalleryAnimation.Slide
      }
    ];

    this.galleryImages = [{
        small: '../../assets/new-images/kitchen.jpg',
        medium: '../../assets/new-images/kitchen.jpg',
        big: '../../assets/new-images/kitchen.jpg'
      },
      {
        small: '../../assets/new-images/kitchen2.jpg',
        medium: '../../assets/new-images/kitchen2.jpg',
        big: '../../assets/new-images/kitchen2.jpg'
      },
      {
        small: '../../assets/new-images/kitchen4.jpg',
        medium: '../../assets/new-images/kitchen4.jpg',
        big: '../../assets/new-images/kitchen4.jpg'
      },
      {
        small: '../../assets/new-images/kitchen6.jpg',
        medium: '../../assets/new-images/kitchen6.jpg',
        big: '../../assets/new-images/kitchen6.jpg'
      },
      {
        small: '../../assets/new-images/kitchen3.jpg',
        medium: '../../assets/new-images/kitchen3.jpg',
        big: '../../assets/new-images/kitchen3.jpg'
      },
      {
        small: '../../assets/new-images/livingroom1.jpg',
        medium: '../../assets/new-images/livingroom1.jpg',
        big: '../../assets/new-images/livingroom1.jpg'
      },
      {
        small: '../../assets/new-images/hallway.jpg',
        medium: '../../assets/new-images/hallway.jpg',
        big: '../../assets/new-images/hallway.jpg'
      },
      {
        small: '../../assets/new-images/bedroom-girls.jpg',
        medium: '../../assets/new-images/bedroom-girls.jpg',
        big: '../../assets/new-images/bedroom-girls.jpg'
      },
      {
        small: '../../assets/new-images/bed-boys.jpg',
        medium: '../../assets/new-images/bed-boys.jpg',
        big: '../../assets/new-images/bed-boys.jpg'
      },
      {
        small: '../../assets/new-images/bed-closet.jpg',
        medium: '../../assets/new-images/bed-closet.jpg',
        big: '../../assets/new-images/bed-closet.jpg'
      },
      {
        small: '../../assets/new-images/bathroom1.jpg',
        medium: '../../assets/new-images/bathroom1.jpg',
        big: '../../assets/new-images/bathroom1.jpg'
      },
      {
        small: '../../assets/new-images/bathroom3.jpg',
        medium: '../../assets/new-images/bathroom3.jpg',
        big: '../../assets/new-images/bathroom3.jpg'
      },
      {
        small: '../../assets/new-images/w-d.jpg',
        medium: '../../assets/new-images/w-d.jpg',
        big: '../../assets/new-images/w-d.jpg'
      },
    ];
  }

  topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}
