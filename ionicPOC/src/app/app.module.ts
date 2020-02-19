import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TabsPageModule } from './ionic/tabs/tabs.module';

// import { TabsModule } from 'ngx-bootstrap/tabs';
import { GoogleMaps } from '@ionic-native/google-maps';
// import { Geolocation, GeolocationOriginal } from '@ionic-native/geolocation';
import { Camera } from '@ionic-native/camera/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, TabsPageModule],// TabsModule.forRoot()],
  providers: [
    StatusBar,
    SplashScreen,
    // GeolocationOriginal,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    GoogleMaps,
    Camera
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
