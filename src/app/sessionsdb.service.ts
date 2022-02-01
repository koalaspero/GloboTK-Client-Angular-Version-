import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionsdbService {

  constructor(private http: HttpClient) { }

  form: FormGroup = new FormGroup({
    id: new FormControl('', Validators.required),
    fecha: new FormControl('', Validators.required),
    correoUser: new FormControl(null, [Validators.required, Validators.email])
  });

  initializeFormGroup() {
    this.form.setValue({
      id: '',
      fecha: '',
      correoUser: ''
    });
  }

  populateForm(session: any) {
    this.form.setValue({
      id: session.id,
      fecha: session.fecha,
      correoUser: session.correoUser
    });
  }

  getSesiones(): Observable<any>{
    return this.http.get("http://localhost:3001/api/sesiones");
  }



}
