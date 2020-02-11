import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'pm-employees',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.sass']
})
export class EmployeeListComponent implements OnInit {

  constructor(private employeeService: EmployeeService) { }

  // tslint:disable-next-line: no-inferrable-types
  pageTitle: string = 'Directory';
  // tslint:disable-next-line: no-inferrable-types
  errorMessage: string  = '';

  // tslint:disable-next-line: no-inferrable-types
  sidePanelOpen: boolean = false;

  selectedEmployee: IEmployee = null;

  private employees: IEmployee[];

  ngOnInit() {
    this.employeeService.getEmployees().subscribe({
      next: employees => {
        this.employees = employees;
      },
      error: err => this.errorMessage = err
    });
  }

  toggleSidePanel(employee: IEmployee) {
    this.selectedEmployee = employee;
    this.sidePanelOpen = !this.sidePanelOpen;
  }
}
