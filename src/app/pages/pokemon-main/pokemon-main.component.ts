import { PokemonService } from './../../services/pokemon.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pokemon-main',
  templateUrl: './pokemon-main.component.html',
  styleUrls: ['./pokemon-main.component.scss']
})
export class PokemonMainComponent implements OnInit {
  pokeList: any[] = [];
  backupPokeList: any[] = [];

  constructor(private pokeService: PokemonService) { }

  ngOnInit() {
    this.getPokemon();
  }

  async getPokemon(){
    let list;
    for(let i = 1; i < 35; i++){
      list = await this.pokeService.pokemonList(i).toPromise()
      this.pokeList.push(list)
    }
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
    this.backupPokeList = this.pokeList
  }

  handlePokeSearch(e){
    let text = e.toUpperCase();
    console.log('text', text)
    this.pokeList = this.backupPokeList

    this.pokeList = this.backupPokeList.filter(p =>
      text == "" ||
      (p.nome && p.nome.toUpperCase().includes(text))
    );
  }
}
