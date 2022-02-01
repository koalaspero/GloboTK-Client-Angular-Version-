import { ViewChild, Component, OnInit } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { NewsDBService } from '../news-db.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { EditNewsComponent } from '../edit-news/edit-news.component';



@Component({
  selector: 'app-admin-news',
  templateUrl: './admin-news.component.html',
  styleUrls: ['./admin-news.component.css']
})
export class AdminNewsComponent implements OnInit {
  displayedColumns: string[] = ['ID', 'Titulo', 'Descripción', 'Link Imagen','Actualizado','Categoría','Enlace a Noticia','actions'];
  dataList: MatTableDataSource<any> = new MatTableDataSource<any>();
  @ViewChild(MatSort)
  sort: MatSort = new MatSort();
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  searchKey: string = "";
  
  
  constructor(public dialog: MatDialog, private newsDB:NewsDBService) { }

  ngOnInit(): void {


      var guardarB = document.getElementById("botonGuardar");
      guardarB?.addEventListener("click", () =>{
        this.rssRequest("https://rss.app/feeds/6DHSn2LP8K3Sk7I8.xml","Music News");
        this.rssRequest("https://rss.app/feeds/oxIxqxi1qfCXaMp2.xml","Pop");
        this.rssRequest("https://rss.app/feeds/HaCqCWAWv8SBxt53.xml","Latin");
        this.rssRequest("https://rss.app/feeds/aO4MIBzrsBkM0zGH.xml","Rock");
      })



      this.newsDB.getNoticias().subscribe((noticias: any[])=>{
        this.dataList.data = noticias;
        this.dataList.sort = this.sort;
        this.dataList.paginator = this.paginator ;
      })  
    

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

  onEdit(news: any){
    this.newsDB.populateForm(news);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(EditNewsComponent,dialogConfig);
  }

  filtra(){
    this.dataList.filter = this.searchKey.trim().toLowerCase();
  }

  rssRequest(enlace: string, tipo: string){
    fetch(enlace)
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
         let cate = tipo;
         let enlace = noticia.getElementsByTagName("link")[0].innerHTML
        
         const postData = {
          titulo: titulo,
          descripcion: desc,
          ImagenAsociada: imagen,
          fechaActualizacion: fechaP,
          categoria: cate,
          rutaNoticia: enlace
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

}
