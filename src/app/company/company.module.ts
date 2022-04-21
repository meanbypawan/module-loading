import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { CompanyListComponent } from './company-list/company-list.component';
import { AddNewCompanyComponent } from './add-new-company/add-new-company.component';
import { CompanyDashboardComponent } from './company-dashboard/company-dashboard.component';


@NgModule({
  declarations: [
    CompanyListComponent,
    AddNewCompanyComponent,
    CompanyDashboardComponent
  ],
  imports: [
    CommonModule,
    CompanyRoutingModule
  ]
})
export class CompanyModule {
  constructor(){
    console.log("Company Module Loaded.....");
  }
}
