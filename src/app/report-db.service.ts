import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ReportDBService {
  static registros: any[] = [];
  constructor(private http: HttpClient) { }


  form: FormGroup = new FormGroup({
    correoUser: new FormControl('', Validators.required),
    fechaActualizacion: new FormControl('', Validators.required),
    categoria: new FormControl('', Validators.required)
  });

  initializeFormGroup() {
    this.form.setValue({
      correoUser:'',
      fechaActualizacion: '',
      categoria: ''
    });
  }

  getReporte(){
    
  }


}
