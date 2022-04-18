import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { SuporteComponent } from './components/suporte/suporte.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ProfessionalComponent } from './components/professional/professional.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { FooterComponent } from './components/footer/footer.component';
import { UseApiComponent } from './components/use-api/use-api.component';
import { ContatoComponent } from './components/contato/contato.component';
import { ConhecimentosComponent } from './components/conhecimentos/conhecimentos.component';
import { HomeConhecimentosComponent } from './components/home-conhecimentos/home-conhecimentos.component';
import { CertificadosComponent } from './components/certificados/certificados.component';
import { Devs2bluComponent } from './components/devs2blu/devs2blu.component';
import { HomeContatoComponent } from './components/home-contato/home-contato.component';
import { UtilizandoApiComponent } from './components/utilizando-api/utilizando-api.component';
import { HomeUtilizandoApiComponent } from './components/home-utilizando-api/home-utilizando-api.component';
import { AplicacoesComponent } from './components/aplicacoes/aplicacoes.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    MenuComponent,
    HomeComponent,
    SuporteComponent,
    AboutMeComponent,
    ProfessionalComponent,
    CalculatorComponent,
    FooterComponent,
    UseApiComponent,
    ContatoComponent,
    ConhecimentosComponent,
    HomeConhecimentosComponent,
    CertificadosComponent,
    Devs2bluComponent,
    HomeContatoComponent,
    UtilizandoApiComponent,
    HomeUtilizandoApiComponent,
    AplicacoesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
