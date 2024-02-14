import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Game } from '../models/game';
import { Firestore, doc, onSnapshot, addDoc } from "@angular/fire/firestore";
import { collection } from 'firebase/firestore';
@Component({
  selector: 'app-start-screen',
  standalone: true,
  imports: [],
  templateUrl: './start-screen.component.html',
  styleUrl: './start-screen.component.scss'
})
export class StartScreenComponent {
  constructor(private router: Router) { }
  firestore: Firestore = inject(Firestore)

  async newGame() {
    let game = new Game
    this.addGame(game)
  }
  
  async addGame(game: Game) {
    await addDoc(this.getGameRef(), game?.toJson()).then((gameinfo: any)=>{    
      this.router.navigateByUrl('/game/'+gameinfo.id);
    })
  }

  getGameRef() {
    return collection(this.firestore, 'games')
  }
}
