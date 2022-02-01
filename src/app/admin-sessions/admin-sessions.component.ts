import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { EditSessionComponent } from '../edit-session/edit-session.component';
import { SessionsdbService } from '../sessionsdb.service';

@Component({
  selector: 'app-admin-sessions',
  templateUrl: './admin-sessions.component.html',
  styleUrls: ['./admin-sessions.component.css']
})
export class AdminSessionsComponent implements OnInit {

  displayedColumns: string[] = ['ID', 'Fecha','Correo','actions'];
  dataList: MatTableDataSource<any> = new MatTableDataSource<any>();
  @ViewChild(MatSort)
  sort: MatSort = new MatSort();
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  searchKey: string = "";

  constructor(public dialog: MatDialog, private sessionDB: SessionsdbService) { }

  ngOnInit(): void {
    this.sessionDB.getSesiones().subscribe((noticias: any[])=>{
      this.dataList.data = noticias;
      this.dataList.sort = this.sort;
      this.dataList.paginator = this.paginator ;
    })
  }

  deleteNoticia(id: string): void {
    $.ajax( {
      url : "http://localhost:3001/api/sesiones",
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

  onEdit(news: any){
    this.sessionDB.populateForm(news);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(EditSessionComponent,dialogConfig);
  }

  filtra(){
    this.dataList.filter = this.searchKey.trim().toLowerCase();
  }





}
