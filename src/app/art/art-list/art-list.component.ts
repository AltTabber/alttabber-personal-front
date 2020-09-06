import { Component, OnInit } from '@angular/core';
import { BlogsService } from './../../services/blogs.service'
import { Blog } from '../../classes/blog';

@Component({
  selector: 'app-art-list',
  templateUrl: './art-list.component.html',
  styleUrls: ['./art-list.component.scss']
})
export class ArtListComponent implements OnInit {

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
