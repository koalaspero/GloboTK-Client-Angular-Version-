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
      let galleta = document.cookie.split("=")[1];
      galleta = galleta.replace("%40","@");
      document.title += " :: "
      document.title += galleta
    }

  }





}

