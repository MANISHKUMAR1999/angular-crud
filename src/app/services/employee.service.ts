import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { employee } from 'interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
constructor(private _http:HttpClient) { }
  addEmployee(data:employee):Observable<any>{
    return this._http.post('http://localhost:3000/employees',data)

  }
  updateEmployee(id:any,data:employee):Observable<any>{
    return this._http.put(`http://localhost:3000/employees/${id}`,data)

  }

  getEmployeeList():Observable<any>{
    return this._http.get('http://localhost:3000/employees')
  }

  getDeleteEmployeeData(id:number):Observable<any>{
    return this._http.delete(` http://localhost:3000/employees/${id}`)

  }
}
