import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ReportDBService } from '../report-db.service';

@Component({
  selector: 'app-admin-report',
  templateUrl: './admin-report.component.html',
  styleUrls: ['./admin-report.component.css']
})
export class AdminReportComponent implements OnInit {
  displayedColumns: string[] = ['idNoticia', 'correoUser', 'titulo', 'fechaActualizacion','categoria'];
  dataList: MatTableDataSource<any> = new MatTableDataSource<any>();
  @ViewChild(MatSort)
  sort: MatSort = new MatSort();
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  searchKey: string = "";
  public userList:{correoUser:string}[] = []


  constructor(public reportDB: ReportDBService) { }

  ngOnInit(): void {
    fetch("http://localhost:3001/reporte/users")
      .then(texto => texto.json())
      .then(data => {
        this.userList = data; 
      })    
  }

  filtra(){
    this.dataList.filter = this.searchKey.trim().toLowerCase();
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
  }

  filtrarReportes(){

    let filtro = this.reportDB.form.value.correoUser+"|"+this.reportDB.form.value.fechaActualizacion+"|"+this.reportDB.form.value.categoria;
    fetch("http://localhost:3002/"+filtro)
    .then(texto => texto.json())
    .then(data => {
        this.dataList.data = data;
        this.dataList.sort = this.sort;
        this.dataList.paginator = this.paginator ;
    })
  }

  cargarReporte(){
    fetch("http://localhost:3001/notifav")
      .then(texto => texto.json())
      .then(async data => {
        for(let fav of data){
          const postData = {
            idNoticia: fav.idNoticia,
            correoUser: fav.correoUser,
            titulo: fav.noticia.titulo,
            fechaActualizacion: fav.noticia.fechaActualizacion,
            categoria: fav.noticia.categoria,
            };
          try {
            const response = await fetch('http://localhost:3002/reporte/', {
              method: "post",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify(postData)
            });
          
            if (!response.ok) {
              const message = 'Error with Status Code: ' + response.status;
              throw new Error(message);
            }
          
            const data = await response.json();
            console.log(data);
          } catch (error) {
            console.log('Error: ' + error);
          } 
        }

      });

  }

}
