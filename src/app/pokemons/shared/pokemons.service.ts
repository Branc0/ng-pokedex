import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from './models/pokemon.model';

const BASE_URL = 'http://localhost:3000'

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  constructor(private httpClient: HttpClient) {}

  getPokemons(name?: string): Observable<Pokemon[]> {
    let httpParams = new HttpParams();
    if (name) {
      httpParams = httpParams.set('name_like', name)
    }
    return this.httpClient.get<Pokemon[]>(`${BASE_URL}/pokemons`, { params: httpParams });
  }

}
