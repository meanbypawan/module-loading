import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../model/post';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  postApi = "https://jsonplaceholder.typicode.com/posts";
  constructor(private http:HttpClient) { }

  public getPostList():Observable<Post[]>{
    return this.http.get<Post[]>(this.postApi);
  }
}
