import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {


  public allBlogs = [
    {
      "blogId": "1",
      "lastmodified": "2018-10-12 15:52:52",
      "created": "2017-10-17 12:52:45",
      "tags": ["humour","standup comedy"],
      "author": "admin",
      "category": "comedy",
      "ispublished": true,
      "views": 0,
      "bodyHtml": "this is blog body",
      "description": "blog 1 desc",
      "title": "hisisblog1"
    },
    {
      "blogId": "2",
      "lastmodified": "2018-10-12 15:52:52",
      "created": "2017-10-17 12:52:45",
      "tags": [],
      "author": "admin",
      "category": "comedy",
      "ispublished": true,
      "views": 0,
      "bodyHtml": "this is blog body",
      "description": "blog 1 desc",
      "title": "hisisblog1"

    },
    {
      "blogId": "3",
      "lastmodified": "2018-10-12 15:52:52",
      "created": "2017-10-17 12:52:45",
      "tags": [],
      "author": "admin",
      "category": "comedy",
      "ispublished": true,
      "views": 0,
      "bodyHtml": "this is blog body",
      "description": "blog 1 desc",
      "title": "hisisblog1"
    }
  ]

public currentBlog;


constructor() {


  console.log("service cons is called");
  
  
     }

     public getAllBlogs():any {

      return this.allBlogs;

    }
    

public getSingleBlogInformation(currentBlogId):any
{
  for(let blog of this.allBlogs){
    if(blog.blogId==currentBlogId){
      this.currentBlog=blog;
    }
  }

  console.log(this.currentBlog);
  return this.currentBlog;
}
  
}
