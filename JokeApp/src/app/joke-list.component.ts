import { Joke } from './joke';
import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { JokeComponent } from './joke.component';

@Component({
  selector: 'joke-list',
  templateUrl: './joke-list.component.html'
})
export class JokeListComponent implements AfterViewInit {
  jokes: Joke[];

  @ViewChild(JokeComponent) jokeViewChild: JokeComponent;

  constructor() {
    this.jokes = [
      new Joke("What did the cheese say when it looked in the mirror?", "Hello-me (Halloumi)"),
      new Joke("What kind of cheese do you use to disguise a small horse?", "Mask-a-pony (Mascarpone)"),
      
    ];

    console.log(`new - jokeViewChild is ${this.jokeViewChild}`);
  }

  ngAfterViewInit() {
    console.log(`ngAfterViewInit - jokeViewChild is ${this.jokeViewChild}`);
  }

  addJoke(joke) {
    this.jokes.unshift(joke);
  }

  removeJoke(joke) {
    let indexToDelete = this.jokes.indexOf(joke);
    if(indexToDelete !== -1) {
      this.jokes.splice(indexToDelete, 1);
    }
  }
}