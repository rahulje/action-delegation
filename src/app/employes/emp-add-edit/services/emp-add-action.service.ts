import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { EmpAddEditComponent } from '../emp-add-edit.component';

@Injectable()
export class EmpAddEditActionService {
  empForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<EmpAddEditComponent>
  ) {
    this.empForm = this.fb.group({
      firstName: '',
      lastName: '',
      email: '',
      gender: '',
      company: '',
    });
  }

  get empFormDetail(): FormGroup {
    return this.empForm;
  }

  addEmployee(): void {
    this.dialogRef.close(this.empForm.value);
  }
}
