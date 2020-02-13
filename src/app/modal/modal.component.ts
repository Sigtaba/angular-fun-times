import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.sass']
})
export class ModalComponent implements OnInit {

  form: FormGroup;
  description: string;

    constructor(
        private fb: FormBuilder,
        private dialogRef: MatDialogRef<ModalComponent>,
        @Inject(MAT_DIALOG_DATA) data) {

        this.description = data.description;
    }

    ngOnInit() {
        this.form = this.fb.group({
            description: [this.description, []]
        });
    }

    save() {
        this.dialogRef.close(this.form.value);
    }

    close() {
        this.dialogRef.close();
    }

}
