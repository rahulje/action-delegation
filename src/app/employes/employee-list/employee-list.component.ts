import { Component, OnInit } from '@angular/core';
import { EmployeListActionService } from './services/employe-list-action.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
  providers: [EmployeListActionService],
})
export class EmployeeListComponent implements OnInit {
  stateObs = this.employeListActionService.getStateObs();
  constructor(
    private readonly employeListActionService: EmployeListActionService
  ) {}

  ngOnInit(): void {
    this.employeListActionService.init();
  }

  addEmploye(): void {
    this.employeListActionService.addEmployee();
  }

  deleteEmployee(id: number): void {
    this.employeListActionService.deleteEmployee(id);
  }
}
