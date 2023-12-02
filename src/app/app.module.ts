import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BusinessesComponent } from './businesses.component';
import { ReactiveFormsModule } from '@angular/forms';
import { WebService } from './web.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { BusinessComponent } from './business.component';
import { AuthModule } from '@auth0/auth0-angular';
import { NavComponent } from './nav.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppHeroComponent } from './app-hero/app-hero.component';
import { StarRatingComponent } from './star-rating/star-rating.component';



var routes: any = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'businesses',
    component: BusinessesComponent
  },
  {
    path: 'businesses/:id',
    component: BusinessComponent
  }
];

@NgModule({
  declarations: [
    AppHeaderComponent, AppComponent, BusinessesComponent, HomeComponent, BusinessComponent, NavComponent, AppHeroComponent, StarRatingComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, ReactiveFormsModule,
    RouterModule.forRoot(routes),
    AuthModule.forRoot({
      domain: 'dev-y42suphem3d80m3f.us.auth0.com',
      clientId: 'NYpvCJCLQcIQpsIj5Piicbo65j6524OP'
    })
  ],
  providers: [WebService],
  bootstrap: [AppComponent]
})
export class AppModule { }
