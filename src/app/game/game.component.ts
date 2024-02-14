import { Component, inject } from '@angular/core';
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
import { Firestore, doc, onSnapshot, addDoc, updateDoc } from "@angular/fire/firestore";
import { collection } from 'firebase/firestore';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule, PlayerComponent, MatButtonModule, MatIconModule, FormsModule, MatInputModule, MatFormFieldModule, GameInfoComponent,],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})

export class GameComponent {
  unsublist: any;

  constructor(private route: ActivatedRoute, public dialog: MatDialog) {
  }
  game!: Game;
  gameId!: string;
  firestore: Firestore = inject(Firestore)

  ngOnInit() {
    this.newGame();
    this.updateJson();
  }

  newGame() {
    this.game = new Game();
  }

  updateJson() {
    this.route.params.subscribe((params) => {
      let idGame: string = params['id'];
      this.gameId = idGame;
      this.unsublist = onSnapshot(this.getSingleDocRef('games', idGame), (data) => {
        let info: any = data.data();
        this.game.currentPlayer = info.currentPlayer;
        this.game.playedCards = info.playedCards;
        this.game.stack = info.stack;
        this.game.players = info.players;
        this.game.currentCard = info.currentCard;
        this.game.pickCardAnimation = info.pickCardAnimation;
      })
    })
  }

  ngonDestroy() {
    this.unsublist();
  }

  getGameRef() {
    return collection(this.firestore, 'games')
  }

  takeCard() {
    if (!this.game.pickCardAnimation) {
      const poppedCard = this.game.stack.pop();
      if (poppedCard !== undefined) {
        this.game.pickCardAnimation = true;
        this.game.currentCard = poppedCard;
      }
      this.game.currentPlayer++;
      this.game.currentPlayer = this.game.currentPlayer % this.game.players.length;
      this.saveGame();
      
      setTimeout(() => {
        this.game.pickCardAnimation = false;
        this.game.playedCards.push(this.game.currentCard);
        this.saveGame();
      }, 1001);
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddPlayerDialogComponent);

    dialogRef.afterClosed().subscribe(name => {
      if (name && name.length > 0) {
        this.game.players.push(name);
        this.saveGame();
      }
    });
  }

  getSingleDocRef(colId: string, docId: string) {
    return doc(collection(this.firestore, colId), docId)
  }

  async saveGame() {
    let docRef = this.getSingleDocRef('games', this.gameId)
    await updateDoc(docRef, this.game.toJson())
  }
}

