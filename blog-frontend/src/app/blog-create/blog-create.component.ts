import { Component, OnInit,ViewContainerRef } from '@angular/core';
import { BlogHttpService } from '../blog-http.service';

import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css']
})
export class BlogCreateComponent implements OnInit {

  constructor(private blogHttpService: BlogHttpService,private _route: ActivatedRoute,private router: Router) { }

  public blogTitle: String;
  public blogBodyHtml: String;
  public blogDescription: String;
  public blogCategory: String;
  public possibleCategories = ["comedy", "Drame", "Action", "Technology"]


  ngOnInit() {
  }

  public createBlog(): any {

    let blogData = {

      title: this.blogTitle,
      description:this.blogDescription,
      blogBody:this.blogBodyHtml,
      category:this.blogCategory

    }

    console.log(blogData);

    this.blogHttpService.createBlog(blogData).subscribe(

      data =>{
      console.log("Blog created")
      console.log(data);
      alert("blog posted successfully");
      setTimeout(()=>{
        this.router.navigate(['/blog',data.data.blogId]);
      },10000)

      },

      error =>{
        console.log("some error occured");
        console.log(error.errorMessage);
        alert("some error occured");
      }
    )
  }

}
