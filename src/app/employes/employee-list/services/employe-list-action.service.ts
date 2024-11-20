import { Injectable } from '@angular/core';
import { EmployeListStateService } from './employe-list-state.service';
import {
  IEmployeDetails,
  IEmployeListState,
} from '../interfaces/employe-list-interface';
import { Observable } from 'rxjs';
import {
  EmployeColumnDisplay,
  EmployeList,
} from '../constants/employe-list.const';
import { MatDialog } from '@angular/material/dialog';
import { EmpAddEditComponent } from '../../emp-add-edit/emp-add-edit.component';

@Injectable()
export class EmployeListActionService {
  constructor(
    private readonly employeListStateService: EmployeListStateService,
    private dialog: MatDialog
  ) {}

  init() {
    this.employeListStateService.updateState({
      listData: EmployeList,
      displayColumnsList: EmployeColumnDisplay,
    });
  }

  getStateObs(): Observable<IEmployeListState> {
    return this.employeListStateService.getStateObs();
  }

  addEmployee() {
    this.dialog
      .open(EmpAddEditComponent)
      .afterClosed()
      .subscribe((data: IEmployeDetails) => {
        if (data) {
          this.employeListStateService.updateState({
            listData: [
              ...this.employeListStateService.getState().listData,
              {
                ...data,
                id: this.employeListStateService.getState().listData.length + 1,
              },
            ],
          });
        }
      });
  }

  deleteEmployee(id: number) {
    const { listData } = this.employeListStateService.getState();
    this.employeListStateService.updateState({
      listData: listData.filter((data) => data.id !== id),
    });
  }
}
