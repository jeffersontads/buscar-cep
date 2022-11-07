import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home/home.component';
import { BuscaCepComponent } from './components/busca-cep/busca-cep/busca-cep.component';
import { FormsModule } from '@angular/forms';
import { CepService } from './services/cep.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BuscaCepComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [CepService],
  bootstrap: [AppComponent]
})
export class AppModule { }
