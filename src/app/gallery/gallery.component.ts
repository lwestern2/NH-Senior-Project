import { Component, OnInit} from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation} from 'ngx-gallery';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  ngOnInit(): void {

    this.galleryOptions = [{
        "previewFullscreen": true,
        "previewKeyboardNavigation": true
      },
      {
        width: '100%',
        height: '600px',
        thumbnailsColumns: 5,
        imageAnimation: NgxGalleryAnimation.Slide
      }
    ];

    this.galleryImages = [{
        small: '../../assets/new-images/os-front.jpg',
        medium: '../../assets/new-images/os-front.jpg',
        big: '../../assets/new-images/os-front.jpg'
      },
      {
        small: '../../assets/new-images/os-front1.jpg',
        medium: '../../assets/new-images/os-front1.jpg',
        big: '../../assets/new-images/os-front1.jpg'
    },
      {
        small: '../../assets/new-images/os-front4.jpg',
        medium: '../../assets/new-images/os-front4.jpg',
        big: '../../assets/new-images/os-front4.jpg'
      },
      {
        small: '../../assets/new-images/os-front-angle.jpg',
        medium: '../../assets/new-images/os-front-angle.jpg',
        big: '../../assets/new-images/os-front-angle.jpg'
      },
      {
        small: '../../assets/new-images/swing1.jpg',
        medium: '../../assets/new-images/swing1.jpg',
        big: '../../assets/new-images/swing1.jpg'
      },
      {
        small: '../../assets/new-images/parking-lot.jpg',
        medium: '../../assets/new-images/parking-lot.jpg',
        big: '../../assets/new-images/parking-lot.jpg'
      },
      {
        small: '../../assets/new-images/parking-lot1.jpg',
        medium: '../../assets/new-images/parking-lot1.jpg',
        big: '../../assets/new-images/parking-lot1.jpg'
      },
      {
        small: '../../assets/new-images/parking-lot2.jpg',
        medium: '../../assets/new-images/parking-lot2.jpg',
        big: '../../assets/new-images/parking-lot2.jpg'
      },
      {
        small: '../../assets/new-images/parking-lot3.jpg',
        medium: '../../assets/new-images/parking-lot3.jpg',
        big: '../../assets/new-images/parking-lot3.jpg'
      },
      {
        small: '../../assets/new-images/mangerbuilding.jpg',
        medium: '../../assets/new-images/mangerbuilding.jpg',
        big: '../../assets/new-images/mangerbuilding.jpg'
      },
      {
        small: '../../assets/new-images/backbuilding.jpg',
        medium: '../../assets/new-images/backbuilding.jpg',
        big: '../../assets/new-images/backbuilding.jpg'
      },
      {
        small: '../../assets/new-images/basketball.jpg',
        medium: '../../assets/new-images/basketball.jpg',
        big: '../../assets/new-images/basketball.jpg'
      },
      {
        small: '../../assets/new-images/bikes.jpg',
        medium: '../../assets/new-images/bikes.jpg',
        big: '../../assets/new-images/bikes.jpg'
      },
      {
        small: '../../assets/new-images/bikes1.jpg',
        medium: '../../assets/new-images/bikes1.jpg',
        big: '../../assets/new-images/bikes1.jpg'
      },
      {
        small: '../../assets/new-images/hammick1.jpg',
        medium: '../../assets/new-images/hammick1.jpg',
        big: '../../assets/new-images/hammick1.jpg'
      },
      {
        small: '../../assets/new-images/hammick2.jpg',
        medium: '../../assets/new-images/hammick2.jpg',
        big: '../../assets/new-images/hammick2.jpg'
      },
      {
        small: '../../assets/new-images/grass.jpg',
        medium: '../../assets/new-images/grass.jpg',
        big: '../../assets/new-images/grass.jpg'
      },
      {
        small: '../../assets/new-images/picnic1.jpg',
        medium: '../../assets/new-images/picnic1.jpg',
        big: '../../assets/new-images/picnic1.jpg'
      },
      {
        small: '../../assets/new-images/firepit.jpg',
        medium: '../../assets/new-images/firepit.jpg',
        big: '../../assets/new-images/firepit.jpg'
      },
      {
        small: '../../assets/new-images/firepit1.jpg',
        medium: '../../assets/new-images/firepit1.jpg',
        big: '../../assets/new-images/firepit1.jpg'
      },
      {
        small: '../../assets/new-images/bbq.jpg',
        medium: '../../assets/new-images/bbq.jpg',
        big: '../../assets/new-images/bbq.jpg'
      },
      {
        small: '../../assets/new-images/bbq1.jpg',
        medium: '../../assets/new-images/bbq1.jpg',
        big: '../../assets/new-images/bbq1.jpg'
      },
      {
        small: '../../assets/new-images/club.jpg',
        medium: '../../assets/new-images/club.jpg',
        big: '../../assets/new-images/club.jpg'
      },
      {
        small: '../../assets/new-images/club5.jpg',
        medium: '../../assets/new-images/club5.jpg',
        big: '../../assets/new-images/club5.jpg'
      },
      {
        small: '../../assets/new-images/club4.jpg',
        medium: '../../assets/new-images/club4.jpg',
        big: '../../assets/new-images/club4.jpg'
      },
      {
        small: '../../assets/new-images/club1.jpg',
        medium: '../../assets/new-images/club1.jpg',
        big: '../../assets/new-images/club1.jpg'
      },
      {
        small: '../../assets/new-images/club2.jpg',
        medium: '../../assets/new-images/club2.jpg',
        big: '../../assets/new-images/club2.jpg'
      },
      {
        small: '../../assets/new-images/club3.jpg',
        medium: '../../assets/new-images/club3.jpg',
        big: '../../assets/new-images/club3.jpg'
      },
      {
        small: '../../assets/new-images/kitchen-us.jpg',
        medium: '../../assets/new-images/kitchen-us.jpg',
        big: '../../assets/new-images/kitchen-us.jpg'
      },
      {
        small: '../../assets/new-images/studyroom.jpg',
        medium: '../../assets/new-images/studyroom.jpg',
        big: '../../assets/new-images/studyroom.jpg'
      },
      {
        small: '../../assets/new-images/studyroom1.jpg',
        medium: '../../assets/new-images/studyroom1.jpg',
        big: '../../assets/new-images/studyroom1.jpg'
      },
      {
        small: '../../assets/new-images/studyroom2.jpg',
        medium: '../../assets/new-images/studyroom2.jpg',
        big: '../../assets/new-images/studyroom2.jpg'
      },
      {
        small: '../../assets/new-images/studyroom4.jpg',
        medium: '../../assets/new-images/studyroom4.jpg',
        big: '../../assets/new-images/studyroom4.jpg'
      },
      {
        small: '../../assets/new-images/studyroom5.jpg',
        medium: '../../assets/new-images/studyroom5.jpg',
        big: '../../assets/new-images/studyroom5.jpg'
      },
      {
        small: '../../assets/new-images/games2.jpg',
        medium: '../../assets/new-images/games2.jpg',
        big: '../../assets/new-images/games2.jpg'
      },
      {
        small: '../../assets/new-images/games.jpg',
        medium: '../../assets/new-images/games.jpg',
        big: '../../assets/new-images/games.jpg'
      },
      {
        small: '../../assets/new-images/games1.jpg',
        medium: '../../assets/new-images/games1.jpg',
        big: '../../assets/new-images/games1.jpg'
      },
      {
        small: '../../assets/new-images/games1.jpg',
        medium: '../../assets/new-images/games1.jpg',
        big: '../../assets/new-images/games1.jpg'
      },
      {
        small: '../../assets/new-images/kitchen-ds.jpg',
        medium: '../../assets/new-images/kitchen-ds.jpg',
        big: '../../assets/new-images/kitchen-ds.jpg'
      },
      {
        small: '../../assets/new-images/pool.jpg',
        medium: '../../assets/new-images/pool.jpg',
        big: '../../assets/new-images/pool.jpg'
      },
      {
        small: '../../assets/new-images/mail.jpg',
        medium: '../../assets/new-images/mail.jpg',
        big: '../../assets/new-images/mail.jpg'
      },
      {
        small: '../../assets/new-images/theater1.jpg',
        medium: '../../assets/new-images/theater1.jpg',
        big: '../../assets/new-images/theater1.jpg'
      },
      {
        small: '../../assets/new-images/theater2-du.jpg',
        medium: '../../assets/new-images/theater2-du.jpg',
        big: '../../assets/new-images/theater2-du.jpg'
      },
      {
        small: '../../assets/new-images/theater2.jpg',
        medium: '../../assets/new-images/theater2.jpg',
        big: '../../assets/new-images/theater2.jpg'
      },
      {
        small: '../../assets/new-images/piano-room.jpg',
        medium: '../../assets/new-images/piano-room.jpg',
        big: '../../assets/new-images/piano-room.jpg'
      },
      {
        small: '../../assets/new-images/piano.jpg',
        medium: '../../assets/new-images/piano.jpg',
        big: '../../assets/new-images/piano.jpg'
      },
      {
        small: '../../assets/new-images/gym-boys-ds.jpg',
        medium: '../../assets/new-images/gym-boys-ds.jpg',
        big: '../../assets/new-images/gym-boys-ds.jpg'
      },
      {
        small: '../../assets/new-images/gym-boys-ds1.jpg',
        medium: '../../assets/new-images/gym-boys-ds1.jpg',
        big: '../../assets/new-images/gym-boys-ds1.jpg'
      },
      {
        small: '../../assets/new-images/gym-boys-ds2.jpg',
        medium: '../../assets/new-images/gym-boys-ds2.jpg',
        big: '../../assets/new-images/gym-boys-ds2.jpg'
      },
      {
        small: '../../assets/new-images/gym-boys-us.jpg',
        medium: '../../assets/new-images/gym-boys-us.jpg',
        big: '../../assets/new-images/gym-boys-us.jpg'
      },
      {
        small: '../../assets/new-images/gym-boys-us1.jpg',
        medium: '../../assets/new-images/gym-boys-us1.jpg',
        big: '../../assets/new-images/gym-boys-us1.jpg'
      },
      {
        small: '../../assets/new-images/gym-girls.jpg',
        medium: '../../assets/new-images/gym-girls.jpg',
        big: '../../assets/new-images/gym-girls.jpg'
      },
      {
        small: '../../assets/new-images/gym-girls1.jpg',
        medium: '../../assets/new-images/gym-girls1.jpg',
        big: '../../assets/new-images/gym-girls1.jpg'
      },
      {
        small: '../../assets/new-images/gym-girls2.jpg',
        medium: '../../assets/new-images/gym-girls2.jpg',
        big: '../../assets/new-images/gym-girls2.jpg'
      },
      {
        small: '../../assets/new-images/gym-girls3.jpg',
        medium: '../../assets/new-images/gym-girls3.jpg',
        big: '../../assets/new-images/gym-girls3.jpg'
      },
      {
        small: '../../assets/new-images/floorplan.jpg',
        medium: '../../assets/new-images/floorplan.jpg',
        big: '../../assets/new-images/floorplan.jpg'
      },
      {
        small: '../../assets/new-images/floorplan1.jpg',
        medium: '../../assets/new-images/floorplan1.jpg',
        big: '../../assets/new-images/floorplan1.jpg'
      },
      {
        small: '../../assets/new-images/entry.jpg',
        medium: '../../assets/new-images/entry.jpg',
        big: '../../assets/new-images/entry.jpg'
      },
      {
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
        small: '../../assets/new-images/kitchen7.jpg',
        medium: '../../assets/new-images/kitchen7.jpg',
        big: '../../assets/new-images/kitchen7.jpg'
      },
      {
        small: '../../assets/new-images/kitchen3.jpg',
        medium: '../../assets/new-images/kitchen3.jpg',
        big: '../../assets/new-images/kitchen3.jpg'
      },
      {
        small: '../../assets/new-images/kitchen-living.jpg',
        medium: '../../assets/new-images/kitchen-living.jpg',
        big: '../../assets/new-images/kitchen-living.jpg'
      },
      {
        small: '../../assets/new-images/livingroom.jpg',
        medium: '../../assets/new-images/livingroom.jpg',
        big: '../../assets/new-images/livingroom.jpg'
      },
      {
        small: '../../assets/new-images/livingroom1.jpg',
        medium: '../../assets/new-images/livingroom1.jpg',
        big: '../../assets/new-images/livingroom1.jpg'
      },
      {
        small: '../../assets/new-images/lr-closet1.jpg',
        medium: '../../assets/new-images/lr-closet1.jpg',
        big: '../../assets/new-images/lr-closet1.jpg'
      },
      {
        small: '../../assets/new-images/lr-closet.jpg',
        medium: '../../assets/new-images/lr-closet.jpg',
        big: '../../assets/new-images/lr-closet.jpg'
      },
      {
        small: '../../assets/new-images/hall-closet.jpg',
        medium: '../../assets/new-images/hall-closet.jpg',
        big: '../../assets/new-images/hall-closet.jpg'
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
        small: '../../assets/new-images/bed-girls1.jpg',
        medium: '../../assets/new-images/bed-girls1.jpg',
        big: '../../assets/new-images/bed-girls1.jpg'
      },
      {
        small: '../../assets/new-images/bed-girls.jpg',
        medium: '../../assets/new-images/bed-girls.jpg',
        big: '../../assets/new-images/bed-girls.jpg'
      },
      {
        small: '../../assets/new-images/bed-closet1.jpg',
        medium: '../../assets/new-images/bed-closet1.jpg',
        big: '../../assets/new-images/bed-closet1.jpg'
      },
      {
        small: '../../assets/new-images/bed-boys.jpg',
        medium: '../../assets/new-images/bed-boys.jpg',
        big: '../../assets/new-images/bed-boys.jpg'
      },
      {
        small: '../../assets/new-images/bed-boys1.jpg',
        medium: '../../assets/new-images/bed-boys1.jpg',
        big: '../../assets/new-images/bed-boys1.jpg'
      },
      {
        small: '../../assets/new-images/bed-boys2.jpg',
        medium: '../../assets/new-images/bed-boys2.jpg',
        big: '../../assets/new-images/bed-boys2.jpg'
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
        small: '../../assets/new-images/bathroom2.jpg',
        medium: '../../assets/new-images/bathroom2.jpg',
        big: '../../assets/new-images/bathroom2.jpg'
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
      {
        small: '../../assets/images/nh tenants.jpg',
        medium: '../../assets/images/nh tenants.jpg',
        big: '../../assets/images/nh tenants.jpg'
      },
      {
        small: '../../assets/images/nh tenant-1.jpg',
        medium: '../../assets/images/nh tenant-1.jpg',
        big: '../../assets/images/nh tenant-1.jpg'
      },
      {
        small: '../../assets/images/nh tenant-2.jpg',
        medium: '../../assets/images/nh tenant-2.jpg',
        big: '../../assets/images/nh tenant-2.jpg'
      },
      {
        small: '../../assets/images/nh-boys 2.jpg',
        medium: '../../assets/images/nh-boys 2.jpg',
        big: '../../assets/images/nh-boys 2.jpg'
      },
      {
        small: '../../assets/images/nh tenant-3.jpg',
        medium: '../../assets/images/nh tenant-3.jpg',
        big: '../../assets/images/nh tenant-3.jpg'
      },
      {
        small: '../../assets/images/nh-jump rope.jpg',
        medium: '../../assets/images/nh-jump rope.jpg',
        big: '../../assets/images/nh-jump rope.jpg'
      },
      {
        small: '../../assets/images/nh-light.jpg',
        medium: '../../assets/images/nh-light.jpg',
        big: '../../assets/images/nh-light.jpg'
      },
      {
        small: '../../assets/images/nh tenant-4.jpg',
        medium: '../../assets/images/nh tenant-4.jpg',
        big: '../../assets/images/nh tenant-4.jpg'
      },
      {
        small: '../../assets/images/nh-boys.jpg',
        medium: '../../assets/images/nh-boys.jpg',
        big: '../../assets/images/nh-boys.jpg'
      },
      {
        small: '../../assets/images/nh-tenant fall.jpg',
        medium: '../../assets/images/nh-tenant fall.jpg',
        big: '../../assets/images/nh-tenant fall.jpg'
      },
      {
        small: '../../assets/images/nh-swing.jpg',
        medium: '../../assets/images/nh-swing.jpg',
        big: '../../assets/images/nh-swing.jpg'
      },
      {
        small: '../../assets/images/nh-hammick.jpg',
        medium: '../../assets/images/nh-hammick.jpg',
        big: '../../assets/images/nh-hammick.jpg'
      },
      {
        small: '../../assets/images/nh-girls.jpg',
        medium: '../../assets/images/nh-girls.jpg',
        big: '../../assets/images/nh-girls.jpg'
      },
      {
        small: '../../assets/images/nh-tenants.jpg',
        medium: '../../assets/images/nh-tenants.jpg',
        big: '../../assets/images/nh-tenants.jpg'
      },
      {
        small: '../../assets/images/nh-twister.jpg',
        medium: '../../assets/images/nh-twister.jpg',
        big: '../../assets/images/nh-twister.jpg'
      },
      {
        small: '../../assets/images/nh-tenants-1.jpg',
        medium: '../../assets/images/nh-tenants-1.jpg',
        big: '../../assets/images/nh-tenants-1.jpg'
      },
      {
        small: '../../assets/images/Nauvoo+House003-croped.jpg',
        medium: '../../assets/images/Nauvoo+House003-croped.jpg',
        big: '../../assets/images/Nauvoo+House003-croped.jpg'
      }
    ];
  }


}
