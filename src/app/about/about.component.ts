import { createInjectableDefinitionMap } from '@angular/compiler/src/render3/partial/injectable';
import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { Observable, Subscriber } from 'rxjs';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public ngAfterViewInit(): void {
    this.initMap();
  }

  private getCurrentPosition(): any {
    return new Observable((observer: Subscriber<any>) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position: any) => {
          observer.next({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
          observer.complete();
        });
      } else {
        observer.error();
      }
    });
  }

  private initMap() :void{
    var map = L.map('map').setView([-2.1449, -79.9676], 15);
  
    var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      });
      osm.addTo(map);
  
    L.marker([-2.1449, -79.9676]).addTo(map)
      .bindPopup('FIEC ESPOL')
      .openPopup();
    
    this.getCurrentPosition()
      .subscribe((position: any) => {
        map.flyTo([position.latitude, position.longitude], 13);
  
        const icon = L.icon({
          iconUrl: 'https://res.cloudinary.com/rodrigokamada/image/upload/v1637581626/Blog/angular-leaflet/marker-icon.png',
          shadowUrl: 'https://res.cloudinary.com/rodrigokamada/image/upload/v1637581626/Blog/angular-leaflet/marker-shadow.png',
          popupAnchor: [13, 0],
        });
  
        const marker = L.marker([position.latitude, position.longitude], { icon }).bindPopup('Angular Leaflet');
        marker.addTo(map);
      });  
    
    
  }
  
}
