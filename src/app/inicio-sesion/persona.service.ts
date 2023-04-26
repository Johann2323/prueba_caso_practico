import { Injectable } from '@angular/core';
import { HttpBackend, HttpClient, HttpEvent, HttpHeaders, HttpParams, HttpResponse, HttpUserEvent } from '@angular/common/http';

import { map, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  private urlendpoint: string = 'http://localhost:8080/api/validarLogin';
  private urlendpoint1: string = 'http://localhost:8080/api/num_rol';
  private urlendpoint2: string = 'http://localhost:8080/api/validarPersona';
  private urlendpoint3: string = 'http://localhost:8080/api/tipocliente';
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' })
  constructor(private http: HttpClient) { }
  
  
}
