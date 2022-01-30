import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})


export class UsuarioDBService {

  
  
  constructor(private http: HttpClient){ 
  }




   getUsuarios(): Observable<any>{
    return this.http.get("http://localhost:3001/users");
  }


}

