import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IEmployee } from '../employee';
import { HttpClient } from '@angular/common/http';
import { EmployeeService } from '../employee.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.sass']
})
export class EmployeeEditComponent implements OnInit {

  constructor(private employeeService: EmployeeService) { }

  private employeesUrl = 'api/employees';

  private employee: IEmployee[];

  ngOnInit() {
    this.employeeService.getEmployee(id);
  }

  // getEmployeebyId(id: number): Observable<IEmployee> {
  //   const url = `${this.employeesUrl}/${id}`;
  //   return this.http.get<IEmployee>(url).pipe(

  //   );
  // }
}
