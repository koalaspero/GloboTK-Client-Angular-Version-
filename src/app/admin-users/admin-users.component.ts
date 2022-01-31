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
      width: '640px',disableClose: true 
    });
  }

  onEdit(element: any){
    this.usuarioDB.populateForm(element);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
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
      /*for(let i = 0; i < usuarios.length ; i++){
        let activo = usuarios[i].isAdmin ? 'on':'off'
        let plantilla = `
              <tr>
                  <td class="text-nowrap align-middle">${usuarios[i].Correo}</td>
                  <td class="text-nowrap align-middle">${usuarios[i].Nombre} ${usuarios[i].Apellido}</td>
                  <td class="text-nowrap align-middle">${usuarios[i].celular}</td>
                  <td class="text-nowrap align-middle"><span>${usuarios[i].fechaNacimiento}</span></td>
                  <td class="text-center align-middle"><i class="fa fa-fw text-secondary cursor-pointer fa-toggle-${activo}"></i></td>
                  <td class="text-center align-middle">
                    <div class="btn-group align-top">
                      <button class="btn btn-sm btn-outline-secondary badge" onclick="modoEdicion('${usuarios[i].Correo}')" type="button" data-toggle="modal" data-target="#user-form-modal">Edit</button>
                      <button class="btn btn-sm btn-outline-secondary badge" onclick="deleteRequest('${usuarios[i].Correo}')" type="button"><i class="fa fa-trash"></i></button>
                    </div>
                  </td>
                </tr>
          `;
  
          let myContainer = document.getElementById('usuarios') as HTMLInputElement;
          myContainer.innerHTML+=plantilla;
  
      }*/

    })  

  }

}



