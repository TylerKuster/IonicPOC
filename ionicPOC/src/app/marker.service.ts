import { Injectable } from '@angular/core';
 
@Injectable({
  providedIn: 'root'
})

export class MarkerService {
    data = [
        {
            markerTitle: "Omaha Terminal",
            markerLat: 41.158640,
            markerLng: -96.141240,
            markerIcon: "assets/icon/pointDown.png"
        },
        {
            markerTitle: "Allentown Terminal",
            markerLat: 40.590610,
            markerLng: -75.584340,
            markerIcon: "assets/icon/pointDown.png"
        },
        {
            markerTitle: "Atlanta Terminal",
            markerLat: 33.773130,
            markerLng: -84.621670,
            markerIcon: "assets/icon/pointDown.png"
        }   
    ]

    getMarkers() {
        return this.data;
    }
}