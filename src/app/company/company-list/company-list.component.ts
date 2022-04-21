import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/model/post';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {
  postList?:Post[];
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
     this.dataService.getPostList()
     .subscribe(data=>{
       this.postList = data;
     },err=>{
        if(err instanceof HttpErrorResponse){
          if(err.status == 400){

          }
          else if(err.status == 404){

          }
          else if(err.status == 500){
            window.alert('Internal server error');
          }
        }
     });
  }

}
