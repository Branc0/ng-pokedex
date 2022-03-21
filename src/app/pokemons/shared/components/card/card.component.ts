import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../../models/pokemon.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent implements OnInit {

  @Input() pokemon!: Pokemon;
  @Input() loading = false;

  constructor() {}

  ngOnInit(): void {
  }

}
