import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  
  

  constructor(private snackBar: MatSnackBar) { }

  noticias: any[] = [];
  
  opciones = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

  ngOnInit(): void {
    /*var selectur: HTMLElement | null = document.getElementById("genre");
    this.newsRequest(selectur);
    */
    var barraBusqueda: HTMLElement | null = document.getElementById("filtrador");
    this.buscador(barraBusqueda);

    var botonLimpiador: HTMLElement | null = document.getElementById("limpiador");
    this.limpiador(botonLimpiador);
  }

  buscador(texto: HTMLElement | null){
    texto!.addEventListener("keyup", () => {
      let valor = document.getElementsByTagName("input")[0].value;
      let elementos: any = document.getElementsByClassName("noti-card-container")
      //console.log(valor.length)
      if(valor.length>0){
        for(let e of elementos){
          if(e.innerText.includes(valor)){
            e.classList.add("d-inline")
          }else{
            e.classList.add("d-none")
          }
        }
      }else{
        for(let e of elementos){
          e.classList.remove("d-none")
          e.classList.add("d-inline")
        }
      }
    })
  }
   
  limpiador(boton: HTMLElement | null){
    boton!.onclick = function(){
      document.getElementsByTagName("input")[0].value = "";
      let noticias: any = document.getElementsByClassName("noti-card-container")
      for(let item of noticias){
        item.classList.remove("d-none")
        item.classList.add("d-inline")
      }
    }  
  }



  selectChangeHandler(event: any) {
    this.noticias = [];
    fetch('http://localhost:3001/noticias/'+event.target.value)
    .then(response => response.json())
    .then((data) => {
      for(let noti of data){
        this.noticias.push(noti);
      }
    }).catch(console.error);

    console.log(this.noticias)
   
  }
 
   async guardarFavorito(event: any): Promise<any> {
    let btn = event?.target;

    let iden = btn.id.split("-")[2];
    console.log(iden);
    var usuarioN: string;
    let listaCookies = document.cookie.split(";")
    let count = 0
    for (let cook in listaCookies) {
      let busca = listaCookies[cook].search("usuario");
      if (busca > -1) {
         usuarioN = listaCookies[cook].split("=")[1].replace("%40", "@");
         count=1;
      }
    }
    if(count==0){
      return this.snackBar.open("Por favor, inicie sesión antes de guardar en Favoritos", "Cerrar");
    }
    
    let datos = this.getNoticiaFav()
    .then(async noticias => {
        console.log(noticias)
        let noti_id;
        let noti_u;
      for(let noti of noticias){
        if(noti.idNoticia == iden && noti.correoUser == usuarioN){
          noti_id = noti.idNoticia
          noti_u = usuarioN
        }
      }
      if(noti_id==undefined && noti_u==undefined){
        const postData = {
          idNoticia: iden,
          correoUser: usuarioN,
        };
        try {
          const response = await fetch('http://localhost:3001/notifav/', {
            method: "post",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(postData)
          });
        
          if (!response.ok) {
            const message = 'Error with Status Code: ' + response.status;
            throw new Error(message);
          }
        
          const data = await response.json();
          console.log(data); 
          this.snackBar.open("Se ha guardado la noticia en Favoritos", "Cerrar");
        } catch (error) {
          console.log('Error: ' + error);
        }
      } else{
         this.snackBar.open("La noticia seleccionada ya está guardada en Favoritos", "Cerrar");
      }
    }

    );
    
  }

  async getNoticiaFav() {
    const data = await fetch('http://localhost:3001/notiFav');
    return await data.json();
  }
/*
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
function peticion(categoria: any) {
  document.getElementsByClassName('noticias container')[0].innerHTML="";
  fetch('http://localhost:3001/notiicias'+categoria)
  .then(response => response.text())
  .then(data =>{
    console.log(data);
  })
  .catch(console.error);
}*/
}