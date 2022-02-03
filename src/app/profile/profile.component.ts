import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NewsDBService } from '../news-db.service';
import { UsuarioDBService } from '../usuario-db.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  displayedColumns: string[] = ['idNoticia','titulo','categoria','actions'];
  dataList: MatTableDataSource<any> = new MatTableDataSource<any>();
  @ViewChild(MatSort)
  sort: MatSort = new MatSort();
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  searchKey: string = "";

  hide = true;
  wasFormChanged = false;



  constructor(public usuarioDB: UsuarioDBService, public newsDB : NewsDBService) { 
  }

  onClear() {
    this.usuarioDB.form.reset();
    this.usuarioDB.initializeFormGroup();
  }

  ngOnInit(): void {
    let listaCookies = document.cookie.split(";")
      var galleta = "";
      for (let cook in listaCookies) {
        let busca = listaCookies[cook].search("usuario");
        if (busca > -1) {
          galleta = listaCookies[cook].split("=")[1].replace("%40", "@");
       
        }
      }
    this.usuarioDB.getUsuario(galleta).subscribe((usuario: any) => {
      this.onEdit(usuario);
    })

    this.newsDB.getNoticiasFavotias(galleta).subscribe((notiFav: any[]) => {
      this.dataList.data = notiFav;
      this.dataList.sort = this.sort;
      this.dataList.paginator = this.paginator ;
    })
    
  }

  deleteNoticia(id: string, correo: string): void {
    $.ajax( {
      url : "http://localhost:3001/notifav",
      type : 'DELETE',
      data: jQuery.param({"idNoticia": id, "correoUser": correo}),
      success : function ( data ) {
      $( "p" ).append( "Delete request is Success." );
      window.location.reload();
      },
      error : function ( jqXhr, textStatus, errorMessage ) {
      $( "p" ).append( "Delete request is Fail.");
      }
    });

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

  filtra(){
    this.dataList.filter = this.searchKey.trim().toLowerCase();
  }

  onSubmit() {
    if (this.usuarioDB.form.valid) {                  
      this.editarUsuario();
      this.usuarioDB.form.reset();
      this.usuarioDB.initializeFormGroup();
      this.onClose();
    }
  }

  onClose() {
    this.usuarioDB.form.reset();
    this.usuarioDB.initializeFormGroup();    
  }

  onEdit(element: any){
    console.log(element);
    this.usuarioDB.populateForm(element);
  }

  formChanged() {
    this.wasFormChanged = true;
  }

}