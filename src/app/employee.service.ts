import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import { IEmployee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employeesUrl = 'api/employees';

  constructor(private http: HttpClient) {}

  getEmployees(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this.employeesUrl);
  }

  // updateEmployees(employee: IEmployee): Observable<IEmployee> {
  //   const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  //   const url = `${this.employeesUrl}/${employee.id}`;
  //   return this.http.put<IEmployee>(url, employee, { headers })
  //     .pipe(
  //       tap(() => console.log('updateEmployee: ' + employee.id)),
  //       // Return the employee on an update
  //       map(() => employee),
  //       catchError(this.handleError)
  //     );
  // }

  // createEmployee(employee: IEmployee): Observable<IEmployee> {
  //   const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  //   employee.id = null;
  //   return this.http.post<IEmployee>(this.employeesUrl, employee, { headers })
  //     .pipe(
  //       tap(data => console.log('createEmployee: ' + JSON.stringify(data))),
  //       catchError(this.handleError)
  //     );
  // }

  // private handleError(err) {
  //   let errorMessage: string;
  //   if (err.error instanceof ErrorEvent) {
  //     errorMessage = `An error occurred: ${err.error.message}`;
  //   } else {
  //     errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
  //   }
  //   console.error(err);
  //   return throwError(errorMessage);
  // }

  initializeEmployee(): IEmployee {
    return {
      id: 0,
      pronoun: null,
      firstName: null,
      lastName: null,
      nickname: null,
      pronounciation: null,
      jobTitle: null,
      toc: null,
      role: null,
      status: null,
    };
  }
}
