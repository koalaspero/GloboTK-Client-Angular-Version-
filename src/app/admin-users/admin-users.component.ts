import { ViewChild, Component, OnInit } from '@angular/core';
import {CreateUserComponent} from '../create-user/create-user.component';
import {MatDialog} from '@angular/material/dialog'; 

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {
 

  constructor(public dialog: MatDialog) { 
    
  }


  edit():void{
    const dialogRef = this.dialog.open(CreateUserComponent,{
      width: '640px',disableClose: true 
    });

  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CreateUserComponent,{
      width: '640px',disableClose: true 
    });

}


  ngOnInit(): void {
    fetch('http://localhost:3001/users')
	  .then(texto => texto.json())
	  .then(usuarios => {
      for(let i = 0; i < usuarios.length ; i++){
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
	                    <button class="btn btn-sm btn-outline-secondary badge" onclick="" type="button" data-toggle="modal" data-target="#user-form-modal">Edit</button>
	                    <button class="btn btn-sm btn-outline-secondary badge" onclick="deleteRequest('${usuarios[i].Correo}')" type="button"><i class="fa fa-trash"></i></button>
	                  </div>
	                </td>
	              </tr>
			    `;

          let myContainer = document.getElementById('usuarios') as HTMLInputElement;
          myContainer.innerHTML+=plantilla;

      }
	  })
    

  }

}



