import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddUserComponent } from './add-user/add-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UsersListComponent } from './users-list/users-list.component';
import { RouterModule, Routes } from '@angular/router';
import { BreadcrumbComponent } from '../breadcrumb/breadcrumb.component';
import { MatIconModule } from '@angular/material/icon'
import { FormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

const routes: Routes = [
  { path: '', component: UsersListComponent },
  { path: 'add', component: AddUserComponent },
  { path: 'update/:id', component: UpdateUserComponent }
];

@NgModule({
  declarations: [
    AddUserComponent,
    UpdateUserComponent,
    UsersListComponent,
    BreadcrumbComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatIconModule,
    FormsModule,
    MatSlideToggleModule 
  ]
})
export class UserModule { }
