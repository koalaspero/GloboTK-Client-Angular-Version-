import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
	 

  constructor () {
    
  }
  public ngOnInit(): void {
    this.cargarTabla();
  }
  
	
	cargarTabla(){
		fetch('http://localhost:3001/users')
	  .then(texto => texto.json())
	  .then(usuarios => {
      for(let i = 0; i < 5 ; i++){
        let activo = usuarios[i].isAdmin ? 'on':'off'
	      let plantilla = `
				      <tr>
                  <td class="text-nowrap align-middle">${usuarios[i].Correo}</td>
	                <td class="text-nowrap align-middle">${usuarios[i].Nombre} ${usuarios[i].Apellido}</td>
                  <td class="text-nowrap align-middle">${usuarios[i].celular}</td>
	                <td class="text-nowrap align-middle"><span>${usuarios[i].fechaNacimiento}</span></td>
	                <td class="text-center align-middle"><i class="fa fa-fw text-secondary cursor-pointer fa-toggle-${activo}"></i></td>
	                </td>
	              </tr>
			    `;

          let myContainer = document.getElementById('usuarios') as HTMLInputElement;
          myContainer.innerHTML+=plantilla;

      }
	  })
	}
}
