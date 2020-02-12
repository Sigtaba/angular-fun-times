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

  pageTitle = 'Directory';
  errorMessage  = '';
  sidePanelOpen = false;
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

  onSaved(updatedEmployee: IEmployee) {
    const index = this.employees.findIndex(employee => employee.id === updatedEmployee.id);
    if (index > -1) {
      this.employees[index] = { ...updatedEmployee };
    } else {
      this.employees.push(updatedEmployee);
    }
  }

  deleteEmployee(i: number) {
    this.employees.splice(i, 1);
  }

  addEmployee() {
    this.sidePanelOpen = !this.sidePanelOpen;
    this.selectedEmployee = this.employeeService.initializeEmployee();
  }
}
