import { Injectable } from '@angular/core';
import { StateStoreService } from 'src/app/core/state-store.service';
import { IEmployeListState } from '../interfaces/employe-list-interface';

@Injectable({
  providedIn: 'root',
})
export class EmployeListStateService extends StateStoreService<IEmployeListState> {
  constructor() {
    super({
      listData: [],
      displayColumnsList: [],
    });
  }
}
