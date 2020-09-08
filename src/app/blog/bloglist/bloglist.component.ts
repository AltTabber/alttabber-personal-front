import { Component, OnInit } from '@angular/core';
import { BlogsService } from './../../services/blogs.service'
import { Blog } from '../../classes/blog';

@Component({
  selector: 'app-bloglist',
  templateUrl: './bloglist.component.html',
  styleUrls: ['./bloglist.component.scss']
})
export class BlogListComponent implements OnInit {

  private blogsService: BlogsService;
  private blogs: Blog[];

  constructor( blogsService: BlogsService ) { 
    this.blogsService = blogsService;
  }

  ngOnInit(): void {
    this.blogsService.getBlogs().subscribe((blogs)=>{
      this.blogs = blogs;
    }
    );
  }

  public getBlogs(): Blog[]{
    return this.blogs;
  }

}
