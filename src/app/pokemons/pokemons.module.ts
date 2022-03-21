import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from './shared/components/card/card.component';
import { CardModule } from './shared/components/card/card.module';
import { SearchInputModule } from './shared/components/search-input/search-input.module';


@NgModule({
  declarations: [
    PokemonListComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    HttpClientModule,
    MatButtonModule,
    CardModule,
    SearchInputModule
  ]
})
export class PokemonsModule {}
