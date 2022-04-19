import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post, PostService } from '../services/getPosts.service';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.scss'],
})
export class SecondPageComponent implements OnInit {
  
  posts!: Post[];
  user!: number;

  constructor(
    private postServe: PostService,
    private activeRoute: ActivatedRoute,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.posts = this.postServe.getPostOffline();
    this.activeRoute.queryParams.subscribe(
      (params) => (this.user = params['user'])
    );
  }
  back() {
    this.route.navigate(['/'])
  }
}
