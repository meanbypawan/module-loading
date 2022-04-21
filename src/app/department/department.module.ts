import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentRoutingModule } from './department-routing.module';
import { DepartmentListComponent } from './department-list/department-list.component';
import { AddNewDepartmentComponent } from './add-new-department/add-new-department.component';


@NgModule({
  declarations: [
    DepartmentListComponent,
    AddNewDepartmentComponent
  ],
  imports: [
    CommonModule,
    DepartmentRoutingModule
  ]
})
export class DepartmentModule {
  constructor(){
    console.log("Department Module Loaded....");
  }
}
