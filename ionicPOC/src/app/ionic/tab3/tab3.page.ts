import { Component, ViewChild } from '@angular/core';

// Import classes from maps module
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  LatLng,
  MarkerOptions,
  MyLocation,
  LocationService,
  Marker,
  GoogleMapOptions
} from "@ionic-native/google-maps";

import { Platform, NavController } from "@ionic/angular";
import { MarkerService } from 'src/app/marker.service';

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
})
export class Tab3Page {
  map: GoogleMap

  markerData = []
  constructor(
    public platform: Platform, 
    public nav: NavController,
    private markerService: MarkerService
    ) {

	}

  ngAfterViewInit() {

    this.markerData = this.markerService.getMarkers()

		this.platform.ready().then( () => {

      this.loadMap();
      this.userLocation();
		});
  }
  
  loadMap() {

    this.map = GoogleMaps.create( 'map' );
  
    this.map.one( GoogleMapsEvent.MAP_READY ).then( ( data: any ) => {
  
      this.markerData.forEach((pin, index) => {
        let coords: LatLng = new LatLng( pin.markerLat, pin.markerLng );
        
        let markerOptions: MarkerOptions = {
          position: coords,
          icon: pin.markerIcon,
          title: pin.markerTitle,
          animation: 'DROP'
        };
    
        const marker = this.map.addMarker( markerOptions )
      })
    })
  }

  userLocation() {
    LocationService.getMyLocation().then((myLocation: MyLocation) => {
      let position = {
        target: myLocation.latLng,
        zoom: 18,
        tilt: 60,
        duration: 500
      };
  
      let markerOptions: MarkerOptions = {
        position: position.target,
        title: "My Location"
      };
  
      const marker = this.map.addMarker( markerOptions )

      this.map.animateCamera( position );
    });
  }
}
