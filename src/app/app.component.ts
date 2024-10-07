import { Component } from '@angular/core';
import { GameCardComponent } from './components/game-card/game-card.component';
import { Game } from './models/game.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GameCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  game1!: Game;
  game2!: Game;

  constructor() {
    this.game1 = new Game;
    this.game1.name = "Subnautica";
    this.game1.platformLogoPath = "/img/steam-logo.png";
    this.game1.description = "Descendez dans les profondeurs d'un monde sous-marin étranger plein de merveilles et périls. Concevez des équipements, pilotez des sous-marins, terraformez un terrain voxel, et adaptez-vous à la vie sauvage afin d’explorer le monde, tout en essayant de survivre.";
    this.game1.releaseDate = "23/01/2018";
    this.game1.imagePath = "/img/subnautica.jpeg";

    this.game2 = new Game;
    this.game2.name = "Detroit: Become Human";
    this.game2.platformLogoPath = "/img/steam-logo.png";
    this.game2.description = "Detroit: Become Human met le destin de l'humanité et des androïdes entre vos mains, dans un futur proche où les machines sont devenues plus intelligentes que les hommes. Tous vos choix ont une incidence sur la suite du jeu, dans l'une des narrations les plus élaborées jamais écrites.";
    this.game2.releaseDate = "18/06/2020";
    this.game2.imagePath = "/img/detroit_become_human.jpg";
  }
}
