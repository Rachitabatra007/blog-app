import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {BlogService} from './../blog.service';
import {BlogHttpService} from '../blog-http.service';
import {Location} from '@angular/common';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css']
})
export class BlogEditComponent implements OnInit {

public currentBlog;
public possibleCategories = ["comedy", "Drama", "Action", "Technology"];

  constructor(private _route: ActivatedRoute, private router: Router,private blogHttpService:BlogHttpService,private blogService:BlogService) { }

  ngOnInit() {
    let myBlogId = this._route.snapshot.paramMap.get('blogId');
    console.log(myBlogId)
    this.blogHttpService.getSingleBlogInformation(myBlogId).subscribe(

      data =>{
        console.log(data);
        this.currentBlog = data["data"];
        console.log("current Blog is");
        console.log(this.currentBlog);

      },

      error => {

        console.log("some error occured");
        console.log(error.errorMessage)

      }
    )
  }

  public editThisBlog(): any{

    this.blogHttpService.editBlog(this.currentBlog.blogId, this.currentBlog).subscribe(


      data =>{
        console.log(data);
        alert("blog edited successfully");
        setTimeout(() => {
          this.router.navigate(['/blog', this.currentBlog.blogId]);
        }, 1000)

      },

      error =>{
        console.log("some error occured");
        console.log(error.errorMessage)

      }

        
      

    )
  }

}
