import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SessionsdbService } from '../sessionsdb.service';

@Component({
  selector: 'app-edit-session',
  templateUrl: './edit-session.component.html',
  styleUrls: ['./edit-session.component.css']
})
export class EditSessionComponent implements OnInit {

  hide = true;
  wasFormChanged = false;

  constructor(public dialog: MatDialog, public sessionDB: SessionsdbService) { }


  ngOnInit(): void {
  }

  onSubmit() {
    if (this.sessionDB.form.valid) {
      this.editarSesion();
      this.sessionDB.form.reset();
      this.sessionDB.initializeFormGroup();
      this.onClose();
    }
  }

  onClose() {
    this.sessionDB.form.reset();
    this.sessionDB.initializeFormGroup();
    this.dialog.closeAll();
  }



  async editarSesion(){

    let sesion = {
      id : this.sessionDB.form.value.id,
      fecha: this.sessionDB.form.value.fecha,
      correoUser: this.sessionDB.form.value.correoUser
    };

    try{
      const response = await fetch('http://localhost:3001/api/sesiones/', {
        method: "put",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(sesion)
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
