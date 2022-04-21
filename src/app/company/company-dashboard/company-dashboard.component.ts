import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-company-dashboard',
  templateUrl: './company-dashboard.component.html',
  styleUrls: ['./company-dashboard.component.css']
})
export class CompanyDashboardComponent implements OnInit {

  constructor(private router:Router,private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }
  public addNewCompany(){
   this.router.navigate(['add-new-company'],{relativeTo: this.activatedRoute});
  }
  public companyList(){
    this.router.navigate(['company-list'],{relativeTo: this.activatedRoute});
  }
}
