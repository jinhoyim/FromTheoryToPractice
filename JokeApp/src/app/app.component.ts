import { Component } from '@angular/core';
import { Joke } from './joke';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  joke: Joke = new Joke("A kid threw a lump of cheddar at me", "I thought ‘That’s not very mature’");
}
