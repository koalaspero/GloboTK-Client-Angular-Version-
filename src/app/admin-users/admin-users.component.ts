import { ViewChild, Component, OnInit } from '@angular/core';
import {CreateUserComponent} from '../create-user/create-user.component';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog'; 
import { UsuarioDBService } from '../usuario-db.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {

  dataList: MatTableDataSource<any> = new MatTableDataSource<any>();
  displayedColumns: string[] = ['Correo', 'Nombre', 'Celular', 'Fecha de Nacimiento','Admin','actions'];
  @ViewChild(MatSort)
  sort: MatSort = new MatSort();
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  searchKey: string = "";

  constructor(public dialog: MatDialog, private usuarioDB: UsuarioDBService) { 

    
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CreateUserComponent,{
      width: '640px',disableClose: false 
    });
  }

  onEdit(element: any){
    console.log(element);
    this.usuarioDB.populateForm(element);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(CreateUserComponent,dialogConfig);
  }

  deleteUser(correo: string): void {
    $.ajax( {
      url : "http://localhost:3001/admin/users/",
      type : 'DELETE',
      data: jQuery.param({"Correo": correo}),
      success : function ( data ) {
      $( "p" ).append( "Delete request is Success." );
      window.location.reload();
      },
      error : function ( jqXhr, textStatus, errorMessage ) {
      $( "p" ).append( "Delete request is Fail.");
      }
    });

  }

  filtra(){
    this.dataList.filter = this.searchKey.trim().toLowerCase();
  }


  ngOnInit(): void {
    this.usuarioDB.getUsuarios().subscribe((usuarios: any[])=>{
      this.dataList.data = usuarios;
      this.dataList.sort = this.sort;
      this.dataList.paginator = this.paginator ;
    })  

  }

}



