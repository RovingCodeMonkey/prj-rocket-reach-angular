import { Component } from '@angular/core';
import { TumblerApiService } from './tumbler-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rocket-reach';
  posts = [];
  tumblrSubdomain: string; 

  constructor(private tumblerApi: TumblerApiService) { }

  loadBlog(value: string) {
    this.tumblerApi.get(value)
    .subscribe((response: any) => {
      if(response?.posts) {
        this.posts = response.posts;
      } else
      {
        this.posts = [];
      }
    });
  }
}
