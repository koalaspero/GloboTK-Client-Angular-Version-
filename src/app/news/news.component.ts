import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {



  constructor() { }

  ngOnInit(): void {
    var selectur: HTMLElement | null = document.getElementById("genre");
    this.newsRequest(selectur);
    
  }

  newsRequest(select: HTMLElement | null){
    select!.onchange = (event) => {
      var t_body = document.getElementById('news-container');
      t_body!.innerHTML="";
        var ruta = 'http://localhost:3001/noticias/:categoria';
        ruta = ruta.replace(':categoria', (<HTMLInputElement>event.target).value);
        fetch(ruta)
        .then(response => response.json())
        .then(data => {
          var count = 0;
          for(let not of data){
            count+=1;
            if(count = 1){
              let plantillaAlter = `
          <div class="card mb-3" >
                  <div class="row g-0">
                    <div class="col-md-4">
                      <img src="${not.ImagenAsociada}" class="img-fluid img-thumbnail" alt="news_img">
                    </div>
                    <div class="col-md-8">
                      <div class="card-body">
                        <h3 class="card-title">${not.titulo}</h3>
                        <a href="${not.rutaNoticia}"><p data-step="2" data-intro="Texto que al darle click o tocarle (moviles), nos lleva a la noticia completa" class ="card-text">More Info</p></a>
                        <p class="card-text"><small class="text-muted">Updated: ${not.fechaActualizacion}</small></p>
                      </div>
                    </div>
                  </div>
                </div>
          `
              t_body!.innerHTML+=plantillaAlter;
            }else{
              let plantilla =
            `
          <div class="card mb-3" >
                  <div class="row g-0">
                    <div class="col-md-4">
                      <img src="${not.rutaNoticia}" class="img-fluid img-thumbnail" alt="news_img">
                    </div>
                    <div class="col-md-8">
                      <div class="card-body">
                        <h3 class="card-title">${not.titulo}</h3>
                        <a href="${not.ImagenAsociada}"><p class ="card-text">More Info</p></a>
                        <p class="card-text"><small class="text-muted">Updated: ${not.fechaActualizacion}</small></p>
                      </div>
                    </div>
                  </div>
                </div>
          `
              t_body!.innerHTML+=plantilla;
            }
            
            ;
    
    
           
          }
        })
        .catch(console.error);
    
       };
  }



}
