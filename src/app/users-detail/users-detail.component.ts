import {Component} from '@angular/core';
import {NgFor} from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import { usersData } from '../users';

export interface PeriodicElement {
  name: string;
  id: string;
}

const data : usersData [] = [
  {id: '1', name: 'Hydrogen'}
];

@Component({
    selector: 'app-users-detail',
    templateUrl: './users-detail.component.html',
    styleUrls: ['./users-detail.component.css']
  })
export class UsersDetailComponent {
  columns = [
    {
      columnDef: 'id',
      header: 'Id',
      cell: (element: usersData) => `${element.id}`,
    },
    {
      columnDef: 'name',
      header: 'Name',
      cell: (element: usersData) => `${element.name}`,
    },
    // {
    //   columnDef: 'action',
    //   header: 'Action',
    //   // cell: (element: usersData) => `${element.action}`,
    // },
  ];
  dataSource = data;
  displayedColumns = this.columns.map(c => c.columnDef);
}
