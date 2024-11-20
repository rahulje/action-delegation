import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { EmpAddEditActionService } from './services/emp-add-action.service';

@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrls: ['./emp-add-edit.component.scss'],
  providers: [EmpAddEditActionService],
})
export class EmpAddEditComponent implements OnInit {
  empForm: FormGroup = this.empAddEditActionService.empFormDetail;

  constructor(
    private readonly empAddEditActionService: EmpAddEditActionService
  ) {}

  ngOnInit(): void {}

  onFormSubmit(): void {
    this.empAddEditActionService.addEmployee();
  }
}
