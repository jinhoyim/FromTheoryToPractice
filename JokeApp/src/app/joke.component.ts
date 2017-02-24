import { Joke } from './joke';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'joke',
  templateUrl: './joke.component.html'
})
export class JokeComponent {
  @Input('joke') data: Joke;
  @Output() jokeRemoved = new EventEmitter<Joke>();

  removeJoke() {
    this.jokeRemoved.emit(this.data);
  }
}