import { ViewChild, Component, OnInit } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { NewsDBService } from '../news-db.service';


@Component({
  selector: 'app-admin-news',
  templateUrl: './admin-news.component.html',
  styleUrls: ['./admin-news.component.css']
})
export class AdminNewsComponent implements OnInit {
  displayedColumns: string[] = ['ID', 'Titulo', 'Descripción', 'Link Imagen','Actualizado','Categoría','actions'];
  dataList: MatTableDataSource<any> = new MatTableDataSource<any>();
  @ViewChild(MatSort)
  sort: MatSort = new MatSort();
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  searchKey: string = "";
  
  
  constructor(private newsDB:NewsDBService) { }

  ngOnInit(): void {

    function guardarMusicNews(){
      fetch("https://rss.app/feeds/NJtVjTV3z5qAnvBr.xml")
      .then(texto => texto.text())
      .then(data => {
        const parser = new DOMParser();
        const xml = parser.parseFromString(data, "application/xml");
        var opciones = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        console.log(xml);
        let items = xml.getElementsByTagName('item');
        Array.from(items).forEach(async noticia =>{
         let titulo = noticia.getElementsByTagName("title")[0].innerHTML.replace('<![CDATA[',"").replace(']]>','');
         let desc = noticia.getElementsByTagName("description")[0].innerHTML.split("<div>")[2].replace("</div></div>]]>","");
         let imagen = noticia.getElementsByTagName("media:content")[0].getAttribute("url");
         let fechaP = noticia.getElementsByTagName("pubDate")[0].textContent;
         let cate = "Music News";
        
         const postData = {
          titulo: titulo,
          descripcion: desc,
          ImagenAsociada: imagen,
          fechaActualizacion: fechaP,
          categoria: cate,
          };
          console.log(postData);
          
         try {
          const response = await fetch('http://localhost:3001/noticias/', {
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
        } catch (error) {
          console.log('Error: ' + error);
        } 
        
        })
      })
    }
  
    function guardarPop(){
      fetch("https://rss.app/feeds/sxXbYPBZ3eLe7B4c.xml")
      .then(texto => texto.text())
      .then(data => {
        const parser = new DOMParser();
        const xml = parser.parseFromString(data, "application/xml");
        var opciones = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        console.log(xml);
        let items = xml.getElementsByTagName('item');
        Array.from(items).forEach(async noticia =>{
         let titulo = noticia.getElementsByTagName("title")[0].innerHTML.replace('<![CDATA[',"").replace(']]>','');
         let desc = noticia.getElementsByTagName("description")[0].innerHTML.split("<div>")[2].replace("</div></div>]]>","");
         let imagen = noticia.getElementsByTagName("media:content")[0].getAttribute("url");
         let fechaP = noticia.getElementsByTagName("pubDate")[0].textContent;
         let cate = "Pop";
        
         const postData = {
          titulo: titulo,
          descripcion: desc,
          ImagenAsociada: imagen,
          fechaActualizacion: fechaP,
          categoria: cate,
          };
          console.log(postData);
          
         try {
          const response = await fetch('http://localhost:3001/noticias/', {
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
        } catch (error) {
          console.log('Error: ' + error);
        } 
        
        })
      })
    }
    function guardarRock(){
      fetch("https://rss.app/feeds/rDlrPYY9QfuTx7p2.xml")
      .then(texto => texto.text())
      .then(data => {
        const parser = new DOMParser();
        const xml = parser.parseFromString(data, "application/xml");
        var opciones = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        console.log(xml);
        let items = xml.getElementsByTagName('item');
        Array.from(items).forEach(async noticia =>{
         let titulo = noticia.getElementsByTagName("title")[0].innerHTML.replace('<![CDATA[',"").replace(']]>','');
         let desc = noticia.getElementsByTagName("description")[0].innerHTML.split("<div>")[2].replace("</div></div>]]>","");
         let imagen = noticia.getElementsByTagName("media:content")[0].getAttribute("url");
         let fechaP = noticia.getElementsByTagName("pubDate")[0].textContent;
         let cate = "Rock";
        
         const postData = {
          titulo: titulo,
          descripcion: desc,
          ImagenAsociada: imagen,
          fechaActualizacion: fechaP,
          categoria: cate,
          };
          console.log(postData);
          
         try {
          const response = await fetch('http://localhost:3001/noticias/', {
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
        } catch (error) {
          console.log('Error: ' + error);
        } 
        
        })
      })
    }
    function guardarLatin(){
      fetch("https://rss.app/feeds/b5hRbZIVZKXO5JtM.xml")
      .then(texto => texto.text())
      .then(data => {
        const parser = new DOMParser();
        const xml = parser.parseFromString(data, "application/xml");
        var opciones = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        console.log(xml);
        let items = xml.getElementsByTagName('item');
        Array.from(items).forEach(async noticia =>{
         let titulo = noticia.getElementsByTagName("title")[0].innerHTML.replace('<![CDATA[',"").replace(']]>','');
         let desc = noticia.getElementsByTagName("description")[0].innerHTML.split("<div>")[2].replace("</div></div>]]>","");
         let imagen = noticia.getElementsByTagName("media:content")[0].getAttribute("url");
         let fechaP = noticia.getElementsByTagName("pubDate")[0].textContent;
         let cate = "Latin";
        
         const postData = {
          titulo: titulo,
          descripcion: desc,
          ImagenAsociada: imagen,
          fechaActualizacion: fechaP,
          categoria: cate,
          };
          console.log(postData);
          
         try {
          const response = await fetch('http://localhost:3001/noticias/', {
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
        } catch (error) {
          console.log('Error: ' + error);
        } 
        
        })
      })
    }


      var guardarB = document.getElementById("botonGuardar");
      guardarB?.addEventListener("click", () =>{
        guardarMusicNews()
        guardarPop()
        guardarLatin()
        guardarRock()
      })

      


      this.newsDB.getNoticias().subscribe((noticias: any[])=>{
        this.dataList.data = noticias;
        this.dataList.sort = this.sort;
        this.dataList.paginator = this.paginator ;
      })  
    




    /*fetch('http://localhost:3001/noticias')
	  .then(texto => texto.json())
	  .then(noticias => {
      for(let i = 0; i < noticias.length ; i++){
	      let plantilla = `
				      <tr>
                  <td class="text-nowrap align-middle">${noticias[i].id}</td>
	                <td class="text-nowrap align-middle">${noticias[i].titulo}</td>
                  <td class="text-nowrap align-middle">${noticias[i].descripcion}</td>
                  <td class="text-nowrap align-middle">${noticias[i].ImagenAsociada}</td>
                  <td class="text-nowrap align-middle"><span>${noticias[i].fechaActualizacion}</span></td>
                  <td class="text-nowrap align-middle"><span>${noticias[i].categoria}</span></td>
	                <td class="text-center align-middle">
	                  <div class="btn-group align-top">
	                    <button class="btn btn-sm btn-outline-secondary badge" onclick="" type="button" data-toggle="modal" data-target="#user-form-modal">Edit</button>
	                    <button class="btn btn-sm btn-outline-secondary badge" onclick="" type="button"><i class="fa fa-trash"></i></button>
	                  </div>
	                </td>
	              </tr>
			    `;

          let myContainer = document.getElementById('noticias') as HTMLInputElement;
          myContainer.innerHTML+=plantilla;

      }
	  })*/
    

  }

  deleteNoticia(id: string): void {
    $.ajax( {
      url : "http://localhost:3001/noticias",
      type : 'DELETE',
      data: jQuery.param({"id": id}),
      success : function ( data ) {
      $( "p" ).append( "Delete request is Success." );
      window.location.reload();
      },
      error : function ( jqXhr, textStatus, errorMessage ) {
      $( "p" ).append( "Delete request is Fail.");
      }
    });

  }

  filtra(){
    this.dataList.filter = this.searchKey.trim().toLowerCase();
  }

}
