import { Component, OnInit } from '@angular/core';
import { Post, PostService } from '../services/getPosts.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {

  posts!:Post[]

  constructor(private postServ:PostService) { }

  ngOnInit(): void {
    this.postServ.getPosts().subscribe(data => {
      this.posts = data
      this.postServ.setPosts(data);
    })
  }
  
}
