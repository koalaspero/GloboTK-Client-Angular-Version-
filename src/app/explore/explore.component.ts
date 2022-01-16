import { Component, OnInit } from '@angular/core';
import countries from './data/countries.json';
declare var WE: any;

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {

  constructor() { }

  title = 'json-file-read-angular';
  public countryList:{country:string, latitude:string, longitude:string, name:string}[] = countries;
  
  ngOnInit(): void {
    
    var earth = new WE.map('earth_div');
    WE.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(earth);

    for(let i = 0; i < this.countryList.length ; i++){
            let enlacePais = 'https://spotifycharts.com/regional/'+ this.countryList[i].country.toLowerCase()+'/daily/latest';
            const custom = {
              enlace: enlacePais,
              pais: this.countryList[i].name
            }
            let htmLine = "<b>"+ this.countryList[i].name + "</b><br>Artistas más escuchados<br><a "+ "href="+enlacePais+">click here</a>";
            let latitude = this.countryList[i].latitude;
            let longitude = this.countryList[i].longitude;
            var marker = WE.marker([latitude, longitude]).addTo(earth);
            marker.bindPopup(htmLine, {maxWidth: 120, closePopupOnClick: true, closeButton:false});
    }
    

    //var markerCustom = WE.marker([50, -9], '/img/logo-webglearth-white-100.png', 100, 24).addTo(earth);
    

    earth.setView([-1.6, -78], 3.5);

  }

}
