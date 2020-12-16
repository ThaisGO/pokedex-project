import { PokemonService } from './../../services/pokemon.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pokemon-main',
  templateUrl: './pokemon-main.component.html',
  styleUrls: ['./pokemon-main.component.scss']
})
export class PokemonMainComponent implements OnInit {
  pokeList: any[] = [];

  constructor(private pokeService: PokemonService) { }

  ngOnInit() {
    this.getPoke();
  }

  async getPoke(){
    let list;
    for(let i = 1; i < 21; i++){
      list = await this.pokeService.pokemonList(i).toPromise()
      // this.pokeParams(list)
      this.pokeList.push(list)
    }
      console.log('list aqui', list)
      // console.log('poke list aqui', this.pokeList)
      this.pokeParams(this.pokeList)
      return list;
  }

  pokeParams(item){
    const params = item;
    this.pokeList = params.map(pokemon => {
      return{
        nome: pokemon.name,
        imagem: pokemon.sprites.front_default,
        tipo: pokemon.types.map(tipo => tipo.type.name),
      }
    })
    console.log('lista pokeParams map', this.pokeList)
  }
}
