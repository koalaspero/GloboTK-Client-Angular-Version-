import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class NewsDBService {

  constructor(private http: HttpClient) { }

  form: FormGroup = new FormGroup({
    id: new FormControl('', Validators.required),
    titulo: new FormControl('', Validators.required),
    descripcion: new FormControl('', Validators.required),
    ImagenAsociada: new FormControl('', Validators.required),
    fechaActualizacion: new FormControl('', Validators.required),
    categoria: new FormControl('', Validators.required),
    rutaNoticia: new FormControl('', Validators.required)
  });

  initializeFormGroup() {
    this.form.setValue({
      id: '',
      titulo: '',
      descripcion: '',
      ImagenAsociada: '',
      fechaActualizacion: '',
      categoria: '',
      rutaNoticia: ''
    });
  }

  populateForm(news: any) {
    this.form.setValue({
      id: news.id,
      titulo: news.titulo,
      descripcion: news.descripcion,
      ImagenAsociada: news.ImagenAsociada,
      fechaActualizacion: news.fechaActualizacion,
      categoria: news.categoria,
      rutaNoticia: news.rutaNoticia
    });
  }

  getNoticias(): Observable<any>{
    return this.http.get("http://localhost:3001/noticias");
  }
}
