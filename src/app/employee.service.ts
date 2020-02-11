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

  updateEmployees(employee: IEmployee): Observable<IEmployee> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.employeesUrl}/${employee.id}`;
    return this.http.put<IEmployee>(url, employee, { headers })
      .pipe(
        tap(() => console.log('updateProduct: ' + employee.id)),
        // Return the product on an update
        map(() => employee),
        catchError(this.handleError)
      );
  } /* this part taken straight from tutorial, need to study this a bit */

  private handleError(err) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  } /* this part taken straight from tutorial, need to study this a bit */

  // private initializeEmployee(): IEmployee {
  //   return {
  //     id: 0,
  //     pronoun: null,
  //     firstName: null,
  //     lastName: null,
  //     nickname: null,
  //     pronounciation: null,
  //     jobTitle: null,
  //     toc: null,
  //     role: null,
  //     status: null,
  //   };
  // } /* will come back if I get to the add employee functionality */
}
