export interface IEmployeDetails {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  company: string;
}

export interface IEmployeColummns {
  name: string;
  nameKey: string;
}

export interface IEmployeListState {
  listData: IEmployeDetails[];
  displayColumnsList: IEmployeColummns[];
}
