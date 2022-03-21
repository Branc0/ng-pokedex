import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchInputComponent } from './search-input.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    SearchInputComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatIconModule
  ],
  exports: [
    SearchInputComponent
  ]
})
export class SearchInputModule {}
