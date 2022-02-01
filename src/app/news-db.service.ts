import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class NewsDBService {

  constructor(private http: HttpClient) { }

  getNoticias(): Observable<any>{
    return this.http.get("http://localhost:3001/noticias");
  }
}
