import { Component } from '@angular/core';
import { CepService } from './services/cep.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'consultar-cep';

  constructor(private cepService: CepService) {}

  consultaCep(valorCep: Event, form: any) {
    this.cepService.buscarCep((valorCep.target as HTMLInputElement).value ).subscribe((dados) => {
      this.populaDadosForm(dados, form);
    });
  }

  populaDadosForm(dados: any, form: any) {
    form.setValue({
      cep: dados.cep,
      logradouro: dados.logradouro,
      complemento: dados.complemento,
      bairro: dados.bairro,
      localidade: dados.localidade,
      uf: dados.uf,
    });
  }
}
