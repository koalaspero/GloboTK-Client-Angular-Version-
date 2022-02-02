import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CountrySessionsDBService } from '../country-sessions-db.service';

@Component({
  selector: 'app-edit-country-session',
  templateUrl: './edit-country-session.component.html',
  styleUrls: ['./edit-country-session.component.css']
})
export class EditCountrySessionComponent implements OnInit {

  hide = true;
  wasFormChanged = false;

  constructor(public dialog: MatDialog, public cosessionDB: CountrySessionsDBService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.cosessionDB.form.valid) {
      this.editarSesion();
      this.cosessionDB.form.reset();
      this.cosessionDB.initializeFormGroup();
      this.onClose();
      window.location.reload();
    }
  }

  onClose() {
    this.cosessionDB.form.reset();
    this.cosessionDB.initializeFormGroup();
    this.dialog.closeAll();
  }

  async editarSesion(){

    let sesion = {
      id : this.cosessionDB.form.value.id,
      fecha: this.cosessionDB.form.value.fecha,
      pais: this.cosessionDB.form.value.pais,
      enlacePais: this.cosessionDB.form.value.enlacePais,
      idSesion: this.cosessionDB.form.value.idSesion
    };

    try{
      const response = await fetch('http://localhost:3001/session/country', {
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
