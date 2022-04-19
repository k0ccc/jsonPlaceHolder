import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Post{
    userId: number,
    id: number,
    title: string,
    body: string
}

@Injectable({ providedIn: 'root' })
export class PostService {
  
  posts!:Post[]
  firstGet:boolean = false

  constructor(private httpClient: HttpClient) {}

  getPosts(): Observable<Post[]>{

    return this.httpClient.get<Post[]>(
      'https://jsonplaceholder.typicode.com/posts'
      );

  }
  setPosts(posts:Post[]):void{
    this.posts = posts
  }
  getPostOffline():Post[]{
    return this.posts;
  }
}