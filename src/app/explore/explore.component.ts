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
            let htmLine = "<b>"+ this.countryList[i].name + "</b><br>Artistas más escuchados<br><a class='musicSes' "+ "href="+enlacePais+">click here</a>";
            let latitude = this.countryList[i].latitude;
            let longitude = this.countryList[i].longitude;
            var marker = WE.marker([latitude, longitude]).addTo(earth);

            marker.bindPopup(htmLine, {maxWidth: 120,closeButton:false,autoClose:true}).on('dblclick', function() {
              let listaCookies = document.cookie.split(";")
              var galleta;
              for (let cook in listaCookies) {
                let busca = listaCookies[cook].search("usuario");
                if (busca > -1) {
                  galleta = listaCookies[cook].split("=")[1].replace("%40", "@");
                }
              }
              var ruta = "http://localhost:3001/session/"+galleta;
              fetch(ruta)
              .then(texto => texto.json())
	            .then(sesion => {
                let idSes = sesion[0].id;
                countrySession(custom.enlace,custom.pais,idSes);
              })
              
            });;
            
            
    }

    //var markerCustom = WE.marker([50, -9], '/img/logo-webglearth-white-100.png', 100, 24).addTo(earth);
    earth.setView([-1.6, -78], 3.5);

    function countrySession(enlace: string, pais: string,id: any): void {
      var today = new Date();
      var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
      var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      var dateTime = date+' '+time;

      let sesionPais = {
        pais: pais,
        enlacePais: enlace,
        fecha: dateTime,
        idSesion: id
      }

      fetch('http://localhost:3001/session/country', {
        method: 'POST',
        headers: {       
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(sesionPais),
      })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    }
  }



}
