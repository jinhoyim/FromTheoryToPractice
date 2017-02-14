import { Joke } from './joke';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'joke',
  templateUrl: './joke.component.html'
})
export class JokeComponent {
  @Input('joke') data: Joke;
}