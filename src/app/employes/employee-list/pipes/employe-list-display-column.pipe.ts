import { Pipe, PipeTransform } from '@angular/core';
import { IEmployeColummns } from '../interfaces/employe-list-interface';

@Pipe({
  name: 'displayColumnName',
})
export class DisplayColumnName implements PipeTransform {
  transform(value: IEmployeColummns[]): string[] {
    return value.map((col:IEmployeColummns) => col.nameKey);
  }
}
