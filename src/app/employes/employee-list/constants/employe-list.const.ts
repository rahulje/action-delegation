import {
  IEmployeColummns,
  IEmployeDetails,
} from '../interfaces/employe-list-interface';

export const EmployeList: IEmployeDetails[] = [
  {
    id: 1,
    firstName: 'Rahul',
    lastName: 'Elagoudanavar',
    email: 'relagoudanavar@privacypilar.com',
    gender: 'Male',
    company: 'Gabspot',
  },
  {
    id: 2,
    firstName: 'Kenneth',
    lastName: 'MacElholm',
    email: 'kmacelholm1@sina.com.cn',
    gender: 'Male',
    company: 'Agivu',
  },
  {
    id: 3,
    firstName: 'Kimmy',
    lastName: 'Penniall',
    email: 'kpenniall2@biblegateway.com',
    gender: 'Female',
    company: 'Mycat',
  },
  {
    firstName: 'Amity',
    lastName: 'Guillard',
    email: 'aguillard3@blogspot.com',
    gender: 'others',
    company: 'Youopia',
    id: 4,
  },
];

export const EmployeColumnDisplay: IEmployeColummns[] = [
  {
    name: 'ID',
    nameKey: 'id',
  },
  {
    name: 'First Name',
    nameKey: 'firstName',
  },
  {
    name: 'Last Name',
    nameKey: 'lastName',
  },
  {
    name: 'Email',
    nameKey: 'email',
  },
  {
    name: 'Company',
    nameKey: 'company',
  },
  {
    name: 'Gender',
    nameKey: 'gender',
  },
  {
    name: 'Action',
    nameKey: 'action',
  },
];
