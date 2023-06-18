import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url:string='http://localhost:3000/'

  constructor(private http:HttpClient) { }

  obtenerDatosPaseadores(): Observable <any>{
    return this.http.get(this.url+'paseadores');
  }

  obtenerDatosPeluquerias(): Observable <any>{
    return this.http.get(this.url+'peluqueria');
  }

  obtenerDatosVeterinaria(): Observable <any>{
    return this.http.get(this.url+'veterinaria');
  }

  obtenerDatosProductos(): Observable <any>{
    return this.http.get(this.url+'productos');
  }
}
