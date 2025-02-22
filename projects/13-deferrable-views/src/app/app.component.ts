import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { PostsComponent } from './posts/posts.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PostsComponent, CurrencyPipe],
  template: `
    <section class="container">
      {{ salary | currency }}
      <h1>Deferrable Views Example</h1>
      <button #loadPosts>Load Posts</button>
      @defer(on interaction(loadPosts)) {
      <app-posts />
      }
    </section>
  `,
})
export class AppComponent {
  salary = 12000000; // uses currency pipe "value | currency"
}
