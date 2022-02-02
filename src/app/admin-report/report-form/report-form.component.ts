import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ReportDBService } from 'src/app/report-db.service';
import { AdminReportComponent } from '../admin-report.component';

@Component({
  selector: 'app-report-form',
  templateUrl: './report-form.component.html',
  styleUrls: ['./report-form.component.css']
})
export class ReportFormComponent implements OnInit {

  public userList:{correoUser:string}[] = []

  constructor(public dialog: MatDialog, public reportDB: ReportDBService) { }

  ngOnInit(): void {
    fetch("http://localhost:3001/reporte/users")
      .then(texto => texto.json())
      .then(data => {
        this.userList = data; 
      })    
  }



  onSubmit() {
    if (this.reportDB.form.valid) {
      this.filtrarReportes();
      this.reportDB.form.reset();
      this.reportDB.initializeFormGroup();
      this.onClose();
    }
  }

  onClose() {
    this.reportDB.form.reset();
    this.reportDB.initializeFormGroup();
    this.dialog.closeAll();
  }

  filtrarReportes(){

    let filtro = this.reportDB.form.value.correoUser+"|"+this.reportDB.form.value.fechaActualizacion+"|"+this.reportDB.form.value.categoria;

    window.location.replace("http://localhost:3002/"+filtro);


    fetch("http://localhost:3002/"+filtro)
    .then(texto => texto.json())
    .then(data => {
      
    })




  }

}
