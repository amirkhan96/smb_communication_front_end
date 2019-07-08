import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { FormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  imports: [
    FormsModule,
    MatButtonModule,
    MatSelectModule,
    MatCardModule,
    MatDialogModule,
    MatToolbarModule,
    MatListModule,
    MatDividerModule,
    MatGridListModule,
    MatTabsModule
  ],
  exports: [
    FormsModule,
    MatButtonModule,
    MatSelectModule,
    MatCardModule,
    MatDialogModule,
    MatToolbarModule,
    MatListModule,
    MatDividerModule,
    MatGridListModule,
    MatTabsModule
  ]
})
export class AppMaterialModule { }
