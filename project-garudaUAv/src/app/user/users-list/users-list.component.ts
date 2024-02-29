import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

export interface UserData {
	id: number;
	username: string,
	email: string;
  phone: string;
	role: Array<any>;
	activeStatus: Array<any>;
}

const allUsersData: UserData[] = [];

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent {
  constructor(private route: Router){}
  dataSource = new MatTableDataSource(allUsersData);
  userDetails:any = [
    {"id": 1, "firstName": "John", "lastName": "Doe", "email": "john@example.com", "phone": "123-456-7890", "role": "Admin", "status": "Active", "password": "123454", "address": "Los Angeles"},
    {"id": 2, "firstName": "Jane", "lastName": "Smith", "email": "jane@example.com", "phone": "987-654-3210", "role": "User", "status": "Active", "password": "88888", "address": "New York"},
    {"id": 3, "firstName": "Alice", "lastName": "Jonhnson", "email": "alice@example.com", "phone": "555-555-5555", "role": "User", "status": "Inactive", "password": "567890", "address": "Argentina"}
  ];
  tab: number = 1;

  tabChange(data: number)
  {
    this.tab = data;
  }

  applyFilter(filterValue: string) {
		this.dataSource.filter = filterValue.trim().toLowerCase();
		console.log(this.dataSource)
	}

  routeToUpdate(id: number){
    this.route.navigateByUrl(`/update/${id}`)
  }
}
