import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-busca-cep',
  templateUrl: './busca-cep.component.html',
  styleUrls: ['./busca-cep.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BuscaCepComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
