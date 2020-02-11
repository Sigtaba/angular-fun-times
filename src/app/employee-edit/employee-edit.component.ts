import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { IEmployee } from '../employee';
import { EmployeeService } from '../employee.service';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators, FormControlName } from '@angular/forms';

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

    const test = this.employee.firstName;
    console.log(test);
  }

  saveForm(): void {
    if (this.employeeForm.dirty) {
      const updatedEmployee = { ...this.employee, ...this.employeeForm.value };

      if (updatedEmployee.id === 0) {
        this.employeeService.createEmployee(updatedEmployee)
          .subscribe({
            next: () => this.onSaveComplete(),
            error: err => this.errorMessage = err
          });
        console.log('added new employee');
      } else {
        this.employeeService.updateEmployees(updatedEmployee)
          .subscribe({
            next: () => this.onSaveComplete(),
            error: err => this.errorMessage = err
          });
        this.saved.emit(updatedEmployee);
        console.log('updatedEmployee', updatedEmployee);
        console.log('this dot employee', this.employee);
      }
    } else {
      this.onSaveComplete();
    }
  }

  onSaveComplete(): void {
    console.log('save complete');
  }
}
