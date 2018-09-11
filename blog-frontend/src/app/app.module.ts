import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';


import{RouterModule,Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BlogViewComponent } from './blog-view/blog-view.component';
import { BlogCreateComponent } from './blog-create/blog-create.component';
import { BlogEditComponent } from './blog-edit/blog-edit.component';
import { BlogService } from './blog.service';
import { AboutComponent } from './about/about.component';
import { BlogHttpService } from './blog-http.service';
import {HttpClientModule} from '@angular/common/http'
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogViewComponent,
    BlogCreateComponent,
    BlogEditComponent,
    AboutComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
{path:'home',component:HomeComponent},
{path:'',redirectTo:'home',pathMatch:'full'},
{path:'about',component:AboutComponent},
{path:'blog/:blogId',component:BlogViewComponent},
{path:'create',component:BlogCreateComponent},
{path:'edit/:blogId',component:BlogEditComponent},
  

    ])
 ],
  providers: [BlogService,BlogHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
