import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountrySessionsDBService {

  constructor(private http: HttpClient) { }

  form: FormGroup = new FormGroup({
    id: new FormControl('', Validators.required),
    pais: new FormControl('', Validators.required),
    enlacePais: new FormControl('', Validators.required),
    fecha: new FormControl('', Validators.required),
    idSesion: new FormControl('', Validators.required)
  });

  initializeFormGroup() {
    this.form.setValue({
      id: '',
      pais: '',
      enlacePais: '',
      fecha: '',
      idSesion: ''
    });
  }

  populateForm(session: any) {
    this.form.setValue({
      id: session.id,
      pais: session.pais,
      enlacePais: session.enlacePais,
      fecha: session.fecha,
      idSesion: session.idSesion
    });
  }

  getSesPais():Observable<any>{
    return this.http.get("http://localhost:3001/api/cosesiones");
  }

}
