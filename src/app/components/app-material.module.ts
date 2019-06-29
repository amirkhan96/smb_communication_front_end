import { NgModule } from '@angular/core';
// import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  imports: [
    MatButtonModule,
    // MatDialogModule,
    MatToolbarModule
  ],
  exports: [
    MatButtonModule,
    // MatDialogModule,
    MatToolbarModule
  ]
})
export class AppMaterialModule { }
