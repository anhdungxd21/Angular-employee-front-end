import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError, map, tap } from 'rxjs/operators';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  /** GET: all employee */
  getAll(page:number , size:number):Observable<any>{
    return this.http.get(API_URL + `/employees?page=${page}&size=${size}`);
  }

  /** POST: add employee */
  addEmployee(employee:any):Observable<any>{
    return this.http.post<any>(API_URL+"/employees/create",employee, this.httpOptions).pipe(
      tap((newEm:any) => console.log(`added employee w/ id=${newEm.id}`)),
      catchError(this.handleError<any>('addEmployee'))
    );
  }

  /** GET: employee by id */
  getEmployeeById(id:any){
    return this.http.get<any>(API_URL+`/employees/${id}`);
  }

  putEmployeeById(id:any, employee:any){
    return this.http.put<any>(API_URL+`/employees/${id}`,employee, this.httpOptions).pipe(
      tap((newEm:any) => console.log(`put employee w/ id=${newEm.id}`)),
      catchError(this.handleError<any>('addEmployee'))
    );
  }

  /** DELETE: delete employee by id */
  deleteEmployee(id:any):Observable<any>{
    return this.http.delete<any>(API_URL+`/employees/delete/${id}`,this.httpOptions).pipe(
      tap((newEm:any) => console.log(`delete employee w/ id=${newEm.id}`)),
      catchError(this.handleError<any>('deleteEmployee'))
    );
  }

  /** GET Search by name */
  getEmployeeByName(name:any):Observable<any>{
    return this.http.get<any>(API_URL+`/employees/search?name=${name}`);
  }
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
   private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
