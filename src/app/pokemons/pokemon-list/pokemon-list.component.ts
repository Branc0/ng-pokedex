import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Observable, startWith, switchMap, tap } from 'rxjs';
import { SearchInputComponent } from '../shared/components/search-input/search-input.component';
import { Pokemon } from '../shared/models/pokemon.model';
import { PokemonsService } from '../shared/pokemons.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements AfterViewInit {

  pokemons$: Observable<Pokemon[]> = this.pokemonService.getPokemons();
  @ViewChild('searchInput') searchInputComponent!: SearchInputComponent;

  constructor(private pokemonService: PokemonsService) {}

  ngAfterViewInit(): void {
    this.pokemons$ = this.searchInputComponent.onSearch.pipe(
      startWith(''),
      switchMap(value => this.pokemonService.getPokemons(value))
    );
  }

}
