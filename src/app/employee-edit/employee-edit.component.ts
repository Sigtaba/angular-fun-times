import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { IEmployee } from '../employee';
import { EmployeeService } from '../employee.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.sass']
})
export class EmployeeEditComponent implements OnInit {

  errorMessage: string;
  employeeForm: FormGroup;

  constructor(private fb: FormBuilder,
              private employeeService: EmployeeService) {
              }

  @Input() employee: IEmployee;
  @Output() saved = new EventEmitter<IEmployee>();

  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      pronoun: this.employee.pronoun,
      firstName: this.employee.firstName,
      lastName: this.employee.lastName,
      nickname: this.employee.nickname,
      pronounciation: this.employee.pronounciation,
      jobTitle: this.employee.jobTitle,
      toc: this.employee.toc,
      role: this.employee.role,
      status: this.employee.status,
    });
  }

  saveForm(): void {
    if (this.employeeForm.dirty) {
      const updatedEmployee = { ...this.employee, ...this.employeeForm.value };
      this.saved.emit(updatedEmployee);

      // if (updatedEmployee.id === 0) {
      //   this.employeeService.createEmployee(updatedEmployee).subscribe();
      // } else {
      //   this.employeeService.updateEmployees(updatedEmployee).subscribe();
      // }
    }
  }
}
