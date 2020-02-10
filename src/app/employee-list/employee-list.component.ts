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
  sidePanelOpen: boolean = false;

  private employees: IEmployee[];

  ngOnInit() {
    this.employeeService.getEmployees().subscribe(
      data => this.employees = data
    );
  }

  toggleSidePanel(id: number) {
    // const selectedEmployee = this.employees[id - 1];
    this.sidePanelOpen = !this.sidePanelOpen;
    // console.log('selected employee', selectedEmployee);
    this.employeeService.getEmployee(id);
  }
}
