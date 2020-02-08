import { Component, OnInit } from '@angular/core';
import { IEmployee } from './employee';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'pm-employees',
  templateUrl: './employee-list.component.html'
})
export class EmployeeListComponent implements OnInit {
  // tslint:disable-next-line: no-inferrable-types

  pageTitle: string = 'Directory';

  private employees: IEmployee[];

  private employeesUrl = 'api/employees';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getEmployees().subscribe(
      data => this.employees = data
    );
  }

  getEmployees(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this.employeesUrl);
  }
}
