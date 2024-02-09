import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Game } from '../../app/models/game';
import { PlayerComponent } from '../player/player.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AddPlayerDialogComponent } from '../add-player-dialog/add-player-dialog.component';
import { GameInfoComponent } from '../game-info/game-info.component';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule, PlayerComponent, MatButtonModule, MatIconModule, FormsModule, MatInputModule, MatFormFieldModule, GameInfoComponent,],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})


export class GameComponent {
  constructor(public dialog: MatDialog) { }
  pickCardAnimation = false;
  currentCard: string | undefined = '';
  game: Game | undefined;

  ngOnInit() {
    this.newGame();
  }

  newGame() {
    this.game = new Game();
  }

  takeCard() {
    if (!this.pickCardAnimation) {
      this.currentCard = this.game?.stack.pop();
      this.pickCardAnimation = true;
      if (this.game) {
        this.game.currentPlayer++;
        this.game.currentPlayer = this.game.currentPlayer % this.game?.players.length;
      }
      setTimeout(() => {
        this.pickCardAnimation = false;
        if (this.currentCard == undefined) {

        } else {
          this.game?.playedCards.push(this.currentCard);
        }
      }, 1001);
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddPlayerDialogComponent);

    dialogRef.afterClosed().subscribe(name => {
      if (name && name.length > 0) {
        this.game?.players.push(name);
      }
    });
  }
}

