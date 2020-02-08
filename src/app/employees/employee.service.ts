import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import { IEmployee } from './employee';


export class EmployeeService {
  private employeesUrl = 'api/employees';

  constructor(private http: HttpClient) {}

  getEmployees(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this.employeesUrl);
  }

  getEmployee(id: number): Observable<IEmployee> {
    if (id === 0) {
      return of(this.initializeEmployee());
    }
    const url = `${this.employeesUrl}/${id}`;
    return this.http.get<IEmployee>(url)
      .pipe(
        tap(data => console.log('getEmployee: ' + JSON.stringify(data)))
      );
  }

  private initializeEmployee(): IEmployee {
    // Return an initialized object
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
