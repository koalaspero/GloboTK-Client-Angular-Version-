import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})


export class UsuarioDBService {

  
  
  constructor(private http: HttpClient){ 
  }

  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    Correo: new FormControl(null, [Validators.required, Validators.email]),
    Nombre: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]+([a-zA-Z ]+)*')]),
    Apellido: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]+([a-zA-Z ]+)*')]),
    Contrasenia: new FormControl('', Validators.required),
    celular: new FormControl('', [Validators.required , Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
    fechaNacimiento: new FormControl('', Validators.required),
    isAdmin: new FormControl(false)
  });

  initializeFormGroup() {
    this.form.setValue({
      $key: null,
      Correo: null,
      Nombre: '',
      Apellido: '',
      Contrasenia: '',
      celular: '',
      fechaNacimiento: '',
      isAdmin: false
    });
  }

  populateForm(user: any) {
    this.form.setValue({
      $key: 1,
      Correo: user.Correo,
      Nombre: user.Nombre,
      Apellido: user.Apellido,
      Contrasenia: user.Contrasenia,
      celular: user.celular,
      fechaNacimiento: user.fechaNacimiento,
      isAdmin: user.isAdmin
    });
  }

  getUsuarios(): Observable<any>{
    return this.http.get("http://localhost:3001/users");
  }

  getUsuario(correo : string): any{
    return this.http.get("http://localhost:3001/users/"+correo);
  }

  


}

