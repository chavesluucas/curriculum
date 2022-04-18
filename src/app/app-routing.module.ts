import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeConhecimentosComponent } from './components/home-conhecimentos/home-conhecimentos.component';
import { HomeContatoComponent } from './components/home-contato/home-contato.component';
import { HomeUtilizandoApiComponent } from './components/home-utilizando-api/home-utilizando-api.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { SuporteComponent } from './components/suporte/suporte.component';

const routes: Routes = [
    {path: '', component: LoginPageComponent},
    {path: 'home', component: SuporteComponent},
    {path: 'conhecimentos', component: HomeConhecimentosComponent},
    {path: 'contato', component: HomeContatoComponent},
    {path: 'utilizandoAPI', component: HomeUtilizandoApiComponent},
    {path:'', redirectTo:'/login', pathMatch: 'full'},     
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
