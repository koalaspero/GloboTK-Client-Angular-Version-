import { Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog'; 
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { UsuarioDBService } from '../usuario-db.service';


@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
   // Breakpoint observer code
  hide = true;
  wasFormChanged = false;
  

  constructor(public dialog: MatDialog, public usuarioDB: UsuarioDBService) { 

  }

  ngOnInit(): void {
  }

  onClear() {
    this.usuarioDB.form.reset();
    this.usuarioDB.initializeFormGroup();
  }

  onSubmit() {
    if (this.usuarioDB.form.valid) {
      if (!this.usuarioDB.form.value.$key)
        this.crearUsuario();
      else
        this.editarUsuario();
      this.usuarioDB.form.reset();
      this.usuarioDB.initializeFormGroup();
      this.onClose();
    }
  }

  onClose() {
    this.usuarioDB.form.reset();
    this.usuarioDB.initializeFormGroup();
    this.dialog.closeAll();
  }

  async editarUsuario(){

    let user = {
      Correo: this.usuarioDB.form.value.Correo,
      Nombre: this.usuarioDB.form.value.Nombre, 
      Apellido: this.usuarioDB.form.value.Apellido,
      Contrasenia: this.usuarioDB.form.value.Contrasenia,
      celular: this.usuarioDB.form.value.celular,
      fechaNacimiento: this.usuarioDB.form.value.fechaNacimiento,
      isAdmin:this.usuarioDB.form.value.isAdmin
    };


    try{
      const response = await fetch('http://localhost:3001/admin/users', {
        method: "put",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
      })
  
      if (!response.ok) {
        const message = 'Error with Status Code: ' + response.status;
        throw new Error(message);
        }
      
        const data = await response.json();
        console.log(data);
  
    }catch (error) {
      console.log('Error: ' + error);
    }finally{
      location.reload();
    }
  }


  crearUsuario():void{

    let user = {
      Correo: this.usuarioDB.form.value.Correo,
      Nombre: this.usuarioDB.form.value.Nombre, 
      Apellido: this.usuarioDB.form.value.Apellido,
      Contrasenia: this.usuarioDB.form.value.Contrasenia,
      celular: this.usuarioDB.form.value.celular,
      fechaNacimiento: this.usuarioDB.form.value.fechaNacimiento,
      isAdmin:this.usuarioDB.form.value.isAdmin
    };


    fetch('http://localhost:3001/admin/users', {
        method: "POST",
        headers: {       
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user)
      })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        window.location.reload();
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  formChanged() {
    this.wasFormChanged = true;
  }

  

}
