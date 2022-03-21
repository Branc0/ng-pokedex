import { Component, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchInputComponent {

  value: string = "";
  @Output() onSearch: EventEmitter<string> = new EventEmitter();

  constructor() {}

  applySearch() {
    this.onSearch.emit(this.value);
  }
}
