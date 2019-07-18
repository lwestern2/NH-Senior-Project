import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxGalleryModule } from 'ngx-gallery';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { TilesComponent } from './home/tiles/tiles.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { ResidentsComponent } from './residents/residents.component';
import { AptComponent } from './apt/apt.component';
import { AmenitiesComponent } from './amenities/amenities.component';
import { SignComponent } from './sign/sign.component';
import { AgmCoreModule } from '@agm/core';
import { RentComponent } from './sub-pages/rent/rent.component';
import { RequestComponent } from './sub-pages/request/request.component';
import { ReserveComponent } from './sub-pages/reserve/reserve.component';
import { ReportComponent } from './sub-pages/report/report.component';
import { CleanComponent } from './sub-pages/clean/clean.component';
// import { MatGridTileComponent } from './home/mat-grid-tile/mat-grid-tile.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    TilesComponent,
    GalleryComponent,
    ContactComponent,
    ResidentsComponent,
    AptComponent,
    AmenitiesComponent,
    SignComponent,
    RentComponent,
    RequestComponent,
    ReserveComponent,
    ReportComponent,
    CleanComponent,
    // MatGridTileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxGalleryModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBHb_280k8p4DIqmkygUXqj6w2c7E-RTgA'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
