import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-confirmdialoge',
  template: `
<h1 mat-dialog-title>Esta seguro? </h1>
<div mat-dialog-content>
  <p> Este proceso no es reversible. esta a pnto de elemeinar el {{data.superhero}}</p>
  <div mat-dialog-actions>
<button mat-button (click)="onNoClick()"> No thanks </button>
<button mat-button (click)="onConfirm()"> Confirm</button>

  </div>

</div>
  `,
  styleUrl: './confirmdialoge.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfirmdialogeComponent { 
  constructor(
    public dialogRef: MatDialogRef<ConfirmdialogeComponent>,
    @Inject(MAT_DIALOG_DATA) public data:Hero,
  ) {}

  onNoClick(): void {
    this.dialogRef.close(false);
  }
  onConfirm():void{
    this.dialogRef.close(true);
  }
}
