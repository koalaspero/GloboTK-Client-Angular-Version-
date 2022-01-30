import { Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog'; 
import { FormBuilder,FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
   // Breakpoint observer code
  public fname: string = `Ramesh`;
  public lname: string = `Suresh`;
  public addCusForm: FormGroup;
  hide = true;
  wasFormChanged = false;
  

  constructor(private fb: FormBuilder,public dialog: MatDialog) { 
    this.addCusForm= this.fb.group({
      firstname: [this.fname, [Validators.required, Validators.pattern('[a-zA-Z]+([a-zA-Z ]+)*')]],
      lastname: [this.lname, [Validators.required, Validators.pattern('[a-zA-Z]+([a-zA-Z ]+)*')]],
      birthDate: ['', Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password: ['', Validators.required],
      phone: ['', Validators.required , Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")],
      isAdmin: [false]
    });

  }

  ngOnInit(): void {

  }

  openDialog(): void {
      this.dialog.closeAll();
  }


  vemos():void{
    console.log(this.addCusForm.value.lastname);

    let user = {
      Correo: this.addCusForm.value.email,
      Nombre: this.addCusForm.value.firstname, 
      Apellido: this.addCusForm.value.lastname,
      Contrasenia: this.addCusForm.value.password,
      celular: this.addCusForm.value.phone,
      fechaNacimiento: this.addCusForm.value.birthDate,
      isAdmin:this.addCusForm.value.isAdmin
    };


    fetch('http://localhost:3001/admin/users', {
        method: 'POST',
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
