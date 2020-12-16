import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  baseUrl: string = 'https://pokeapi.co/api/v2'

  constructor(private _http: HttpClient) { }

  pokemonList(id){
    return this._http.get<any>(`${this.baseUrl}/pokemon/${id}`);
  }
}
