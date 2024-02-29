import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent {
  constructor(private route: Router, private activatedRoute: ActivatedRoute){
    console.log(this.activatedRoute.snapshot.paramMap.get('id'));
    this.userData = this.userDetails.filter((ele: any)=>ele.id==this.activatedRoute.snapshot.paramMap.get('id'))[0];
    console.log(this.userData)
  }
  userData: any = {

  }
  userDetails:any = [
    {"id": 1, "firstName": "John", "lastName": "Doe", "email": "john@example.com", "phone": "123-456-7890", "department": "IT", "role": "Admin", "status": "Active", "password": "123454", "conpassword": "123454", "address": "Los Angeles"},
    {"id": 2, "firstName": "Jane", "lastName": "Smith", "email": "jane@example.com", "phone": "987-654-3210", "department": "Sales", "role": "User", "status": "Active", "password": "88888", "conpassword": "88888", "address": "New York"},
    {"id": 3, "firstName": "Alice", "lastName": "Jonhnson", "email": "alice@example.com", "phone": "555-555-5555", "department": "Human Resource", "role": "User", "status": "Inactive", "password": "567890", "conpassword": "567890", "address": "Argentina"}
  ];

  onSubmit(data: any){
    console.log(data);
  }
}
