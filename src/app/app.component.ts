import { Component } from '@angular/core';
import { GameCardComponent } from './components/game-card/game-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GameCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
