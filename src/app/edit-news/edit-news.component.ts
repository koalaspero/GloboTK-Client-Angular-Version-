import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewsDBService } from '../news-db.service';

@Component({
  selector: 'app-edit-news',
  templateUrl: './edit-news.component.html',
  styleUrls: ['./edit-news.component.css']
})
export class EditNewsComponent implements OnInit {

  hide = true;
  wasFormChanged = false;

  constructor(public dialog: MatDialog, public newsDB: NewsDBService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.newsDB.form.valid) {
      this.editarNoticia();
      this.newsDB.form.reset();
      this.newsDB.initializeFormGroup();
      this.onClose();
    }
  }

  onClose() {
    this.newsDB.form.reset();
    this.newsDB.initializeFormGroup();
    this.dialog.closeAll();
  }

  async editarNoticia(){

    let news = {
      id : this.newsDB.form.value.id,
      titulo: this.newsDB.form.value.titulo,
      descripcion: this.newsDB.form.value.descripcion,
      ImagenAsociada: this.newsDB.form.value.ImagenAsociada,
      fechaActualizacion: this.newsDB.form.value.fechaActualizacion,
      categoria: this.newsDB.form.value.categoria,
      rutaNoticia: this.newsDB.form.value.rutaNoticia
    };

    console.log(news);


    try{
      const response = await fetch('http://localhost:3001/noticias/', {
        method: "put",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(news)
      })
  
      if (!response.ok) {
        const message = 'Error with Status Code: ' + response.status;
        throw new Error(message);
        }
      
        const data = await response.json();
        console.log(data);
  
    }catch (error) {
      console.log('Error: ' + error);
    }
  }

}
