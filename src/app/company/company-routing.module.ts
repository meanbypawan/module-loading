import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewCompanyComponent } from './add-new-company/add-new-company.component';
import { CompanyDashboardComponent } from './company-dashboard/company-dashboard.component';
import { CompanyListComponent } from './company-list/company-list.component';

const routes: Routes = [{
  path: '',
  component: CompanyDashboardComponent,
  children:[
    {
      path: 'add-new-company',
      component: AddNewCompanyComponent
    },
    {
      path: 'company-list',
      component: CompanyListComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
