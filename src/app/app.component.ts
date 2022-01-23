import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  public constructor() { }


  ngOnInit(): void {
    
    document.title = "GloboTK"
  
    if((document.URL != "http://localhost:4200/") && (document.URL != "http://localhost:4200/register")){
      
      let listaCookies = document.cookie.split(";")
      var galleta;
      for (let cook in listaCookies) {
        let busca = listaCookies[cook].search("usuario");
        if (busca > -1) {
          galleta = listaCookies[cook].split("=")[1].replace("%40", "@");
       
        }
      }
      document.title += " :: "
      if(galleta!= undefined){
        document.title += " "+galleta
      }
     
    }

  }





}

