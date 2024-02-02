import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'; 
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogRef } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';


@Component({
  selector: 'app-add-player-dialog',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, FormsModule, MatInputModule, MatFormFieldModule,MatDialogModule,],
  templateUrl: './add-player-dialog.component.html',
  styleUrl: './add-player-dialog.component.scss'
})
export class AddPlayerDialogComponent {
  name: string = ''; 

  constructor(public dialogRef: MatDialogRef<AddPlayerDialogComponent>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
