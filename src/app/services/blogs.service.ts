import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Blog } from './../classes/blog'
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BlogsService {

  constructor(private http: HttpClient) { }

  getBlogs(): Observable<Blog[]>{

    return this.http.get<Blog[]>(environment.api_url + '/blog/list');
  }

}
