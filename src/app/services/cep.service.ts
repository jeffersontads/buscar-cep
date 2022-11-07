import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  constructor(
    private http: HttpClient
  ) {}

  buscarCep(cepValue: string){
    return this.http.get(`https://viacep.com.br/ws/${cepValue}/json/`);
  }
}
