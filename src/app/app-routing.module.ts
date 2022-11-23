import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { CadastrarUsuarioComponent } from './views/cadastrar-usuario/cadastrar-usuario.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { EditCollaboratorComponent } from './views/edit-collaborator copy/edit-collaborator.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { NewCollaboratorComponent } from './views/new-collaborator/new-collaborator.component';

const routes: Routes = [
  {
    path:'', // rota vazia
    pathMatch:'full', // somente dominion ex:.com/.org/ .br
    redirectTo:'home' //redireciona
  },
  {
    path:'home',
    component:HomeComponent,
    canActivate:[AuthGuard ],
    title:"Home | Collaborators"
  },
  {
    path:'login',
    component:LoginComponent,
    title: "Login | Collaborators"
  },
  {
    path:'cadastrar',
    component:CadastrarUsuarioComponent,
    title:"Cadastre-se | Collaborators"
  },
  {
    path:'dashboard',
    component:DashboardComponent,
    canActivate:[AuthGuard ],
    title:"Painel de Controle| Colaborators"
  },
  {
    path: 'dashboard/new',
    component:NewCollaboratorComponent,
    canActivate:[AuthGuard ],
    title:"Novo colaborador | Collaborators" 
  },
  {
    path:'dashboard/edit/:id',
    component:EditCollaboratorComponent,
    canActivate:[AuthGuard ],
    title:"Editar Colaborador| Collaborators" 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
