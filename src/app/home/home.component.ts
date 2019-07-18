import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation} from 'ngx-gallery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  title: string = 'Nauvoo House';
  lat: number = 43.814642;
  lng: number = -111.788742;

  constructor() { }

  ngOnInit(): void {

    this.galleryOptions = [{
      "thumbnails": false,
      "imageAutoPlay": true, 
      "imageAutoPlayPauseOnHover": true, 
      "previewAutoPlay": true, 
      "previewAutoPlayPauseOnHover": true,
      "previewFullscreen": true,
      "previewKeyboardNavigation": true
    },
    {
      width: '540px',
      height: '470px',
      thumbnailsAutoHide: true,
      imageAnimation: NgxGalleryAnimation.Slide
    }
  ];

  this.galleryImages = [{
      small: '',
      medium: '../../assets/new-images/os-front.jpg',
      big: '../../assets/new-images/os-front.jpg'
    },
    {
      small: '',
      medium: '../../assets/new-images/kitchen.jpg',
      big: '../../assets/new-images/kitchen.jpg'
    },
    {
      small: '',
      medium: '../../assets/new-images/livingroom.jpg',
      big: '../../assets/new-images/livingroom.jpg'
    },
    {
      small: '',
      medium: '../../assets/new-images/bedroom-girls.jpg',
      big: '../../assets/new-images/bedroom-girls.jpg'
    },
    {
      small: '',
      medium: '../../assets/new-images/bathroom1.jpg',
      big: '../../assets/new-images/bathroom1.jpg'
    },
    {
      small: '',
      medium: '../../assets/new-images/gym-boys-us.jpg',
      big: '../../assets/new-images/gym-boys-us.jpg'
    },
    {
      small: '',
      medium: '../../assets/new-images/studyroom4.jpg',
      big: '../../assets/new-images/studyroom4.jpg'
    },
    {
      small: '',
      medium: '../../assets/new-images/grass.jpg',
      big: '../../assets/new-images/grass.jpg'
    },
  ];
  }

  topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

}
