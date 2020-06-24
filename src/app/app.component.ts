import { Component } from '@angular/core';
import { TumblerApiService } from './tumbler-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'rocket-reach';
  posts = [];
  tumblrSubdomain: string;
  error: string;
  genericError = 'An unexpected error has occurred';

  constructor(private tumblerApi: TumblerApiService) {}

  loadBlog(value: string) {
    this.tumblerApi.get(value).subscribe(
      (response: any) => {
        if (response?.posts) {
          this.posts = response.posts;
          this.error = '';
        } else {
          this.posts = [];
          this.error = this.genericError;
        }
      },
      (err) => {
        this.posts = [];
        if (err?.error?.error) {
          this.error = err?.error?.error ? err.error.error : this.genericError;
        }
      }
    );
  }
}
