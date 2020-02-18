import { Component, ViewChild } from '@angular/core';

// Import classes from maps module
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  LatLng,
  MarkerOptions,
  Marker
} from "@ionic-native/google-maps";

import { Platform, NavController } from "@ionic/angular";

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
})
export class Tab3Page {

  constructor( public platform: Platform, public nav: NavController ) {

	}

  ngAfterViewInit() {

		this.platform.ready().then( () => {

			this.loadMap();
		});
  }
  
  loadMap() {

    let map = GoogleMaps.create( 'map' );
  
    map.one( GoogleMapsEvent.MAP_READY ).then( ( data: any ) => {
  
      let coordinates: LatLng = new LatLng( 36.7783, 119.4179 );
  
      let position = {
        target: coordinates,
        zoom: 14
      };
  
      map.animateCamera( position );
  
      let markerOptions: MarkerOptions = {
        position: coordinates,
        icon: "assets/images/marker.png",
        title: 'Hello California'
      };
  
      const marker = map.addMarker( markerOptions )
      .then( ( marker: Marker ) => {
        marker.showInfoWindow();
      });
    })
  }
}
