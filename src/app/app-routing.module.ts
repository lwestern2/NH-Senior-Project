import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AptComponent } from './apt/apt.component';
import { AmenitiesComponent } from './amenities/amenities.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { ResidentsComponent } from './residents/residents.component';
import { SignComponent } from './sign/sign.component';
import { RentComponent } from './sub-pages/rent/rent.component';
import { RequestComponent } from './sub-pages/request/request.component';
import { ReserveComponent } from './sub-pages/reserve/reserve.component';
import { ReportComponent } from './sub-pages/report/report.component';
import { CleanComponent } from './sub-pages/clean/clean.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'apartments', component: AptComponent},
  {path: 'amenities', component: AmenitiesComponent},
  {path: 'gallery', component: GalleryComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'residents', component: ResidentsComponent},
  {path: 'sign', component: SignComponent},
  {path: 'rent', component: RentComponent},
  {path: 'request', component: RequestComponent},
  {path: 'reservation', component: ReserveComponent},
  {path: 'report', component: ReportComponent},
  {path: 'clean', component: CleanComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
