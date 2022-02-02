import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CountrySessionsDBService } from '../country-sessions-db.service';
import { EditCountrySessionComponent } from '../edit-country-session/edit-country-session.component';

@Component({
  selector: 'app-admin-country-sessions',
  templateUrl: './admin-country-sessions.component.html',
  styleUrls: ['./admin-country-sessions.component.css']
})
export class AdminCountrySessionsComponent implements OnInit {

  displayedColumns: string[] = ['ID', 'Pais','enlacePais','fecha','idSesion','actions'];
  dataList: MatTableDataSource<any> = new MatTableDataSource<any>();
  @ViewChild(MatSort)
  sort: MatSort = new MatSort();
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  searchKey: string = "";

  constructor(public dialog: MatDialog, private sessionPaisDB: CountrySessionsDBService) { }

  ngOnInit(): void {
    this.sessionPaisDB.getSesPais().subscribe((sesionPais: any[])=>{
      console.log(sesionPais);
      this.dataList.data = sesionPais;
      this.dataList.sort = this.sort;
      this.dataList.paginator = this.paginator ;
    })
  }

  deleteSesion(id: string): void {
    $.ajax( {
      url : "http://localhost:3001/session/country",
      type : 'DELETE',
      data: jQuery.param({"id": id}),
      success : function ( data ) {
      $( "p" ).append( "Delete request is Success." );
      window.location.reload();
      },
      error : function ( jqXhr, textStatus, errorMessage ) {
      $( "p" ).append( "Delete request is Fail.");
      }
    });
  }

  onEdit(sessions: any){
    this.sessionPaisDB.populateForm(sessions);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(EditCountrySessionComponent,dialogConfig);
  }

  filtra(){
    this.dataList.filter = this.searchKey.trim().toLowerCase();
  }





}
