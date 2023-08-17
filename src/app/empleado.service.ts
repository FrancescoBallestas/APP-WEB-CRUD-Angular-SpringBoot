import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empleado } from './empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
// Esta URL obtiene el listado de odos los empleados en el backend
  private baseURL = "http://localhost:8080/api/v1/empleados";
  
  constructor(private httpClient : HttpClient) { }

// Este metodo nos sirve para obtener los empleados
  obtenerListaDeEmpleados ():Observable<Empleado[]>{
    return this.httpClient.get<Empleado[]>(`${this.baseURL}`);
  }

  // Este metodo nos sirve para registar un empleado
  registarEmpleado(empleado:Empleado) : Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,empleado);
  }

  //este metodo sirve para actualizar el empleado
  actualizarEmpleado(id:number,empleado:Empleado) : Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,empleado);
  }

  //este metodo sirve para obtener o buscar un empleado
  obtenerEmpleadoPorId(id:number):Observable<Empleado>{
    return this.httpClient.get<Empleado>(`${this.baseURL}/${id}`);
  }

  eliminarEmpleado(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
