import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../employee';
import { EmployeeService } from '../employee.service';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ModalComponent } from 'app/modal/modal.component';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'pm-employees',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.sass']
})
export class EmployeeListComponent implements OnInit {

  constructor(private employeeService: EmployeeService, private dialog: MatDialog) { }

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

  openDialog(e) {
    const dialogConfig = new MatDialogConfig();

    console.log(e.clientX);
    console.log(e.clientY);
    const carrotLocation = e.clientY;

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.position = {
      top: `${carrotLocation}px`
    };

    dialogConfig.data = {
        id: 1,
        title: 'Angular For Beginners'
    };

    const dialogRef = this.dialog.open(ModalComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
        data => console.log('Dialog output:', data)
    );
}
}
