import { Component, OnInit, ViewChild } from '@angular/core';
import { } from 'googlemaps';
declare module 'googlemaps';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  // @ViewChild('map') mapElement: any;
  // map: google.maps.Map;

  title: string = 'Nauvoo House';
  lat: number = 43.814642;
  lng: number = -111.788742;

  constructor() { }

  ngOnInit() {
    // const mapProperties = {
    //      center: new google.maps.LatLng(35.2271, -80.8431),
    //      zoom: 15,
    //      mapTypeId: google.maps.MapTypeId.ROADMAP
    // };
    // this.map = new google.maps.Map(this.mapElement.nativeElement,    
    //   mapProperties);
  }

}
