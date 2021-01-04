import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  searched: boolean = false;
  searchText: string = '';
  @Input("placeholder") placeholderText: string = "Search your pokemon";
  @Output("onSearch") onSearch: EventEmitter<string> = new EventEmitter();

  constructor() { }

  handleKeyEvent(e:KeyboardEvent) {
    if( e.keyCode == 13 ) this.search();
  }

  search() {
    this.onSearch.emit(this.searchText);
    this.searched = this.searchText != "";
  }

  clear() {
    this.searchText = "";
    this.search();
  }

}
