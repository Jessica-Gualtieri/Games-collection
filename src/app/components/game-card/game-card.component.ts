import { Component, input, Input, InputSignal } from '@angular/core';
import { Game } from '../../models/game.model';

@Component({
  selector: 'app-game-card',
  standalone: true,
  imports: [],
  templateUrl: './game-card.component.html',
  styleUrl: './game-card.component.css'
})
export class GameCardComponent {
  game: InputSignal<Game> = input(new Game);
}
