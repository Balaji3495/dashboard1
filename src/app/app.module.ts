import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';

import { AgmOverlays } from 'agm-overlays';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import * as $ from 'jquery'


@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    HttpClientModule,
    AgmOverlays,
    // AgmCoreModule.forRoot({
    //   // please get your own API key here:
    //   // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en
    //   apiKey: 'AIzaSyC3v_a-fCIXOhPdCdmYBY6DVKw59CvwIJ8'
    // })
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCUbmQfyIpmQ67_SakPJccJER9jAO8HZyI'
    })
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
