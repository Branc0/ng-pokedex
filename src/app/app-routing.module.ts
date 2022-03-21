import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonListComponent } from './pokemons/pokemon-list/pokemon-list.component';
import { PokemonsModule } from './pokemons/pokemons.module';

const routes: Routes = [
  {
    path: '',
    component: PokemonListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
