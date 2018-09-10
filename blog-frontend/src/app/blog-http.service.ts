import { Injectable } from '@angular/core';
import{HttpClient,HttpErrorResponse} from '@angular/common/http';
import { Observable } from"rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';


@Injectable()
export class BlogHttpService {
  public allBlogs;
  public currentBlog;
  public baseUrl='https://blogapp.edwisor.com/api/v1/blogs';
  private authToken = 'ZmVjYmEyMzQ2ZmE2Y2M0MTY4ZGUyMDRiMzU4NzY1MGJjODczMGI4NWQ4ZTlmMmQ2YWU2NTI0MDllMjJkZGEyZWRjY2U4N2Q1ZTZmMWRhOWJmM2QwYmNiMTJlM2Y1NWQ3ZWJmODA5ZWIyNWEwNDFmYjk2MWUyYzg1MjEzZGFmOWY0YjNj'
  constructor(private _http:HttpClient) { 
    console.log("bloghttp serive was called");

  }

public getAllBlogs(): any{

let myResponse = this._http.get(this.baseUrl+'/all?authToken='+this.authToken);
console.log(myResponse);
return myResponse;

}

public getSingleBlogInformation(currentBlogId): any{

  let myResponse = this._http.get(this.baseUrl + '/view' + '/' + currentBlogId + '?authToken=' + this.authToken)
return myResponse;
}

}

