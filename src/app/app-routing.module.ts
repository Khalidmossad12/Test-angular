import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path : '' ,redirectTo: 'home', pathMatch:'full'},
  {path : 'home' , canActivate:[AuthGuard] , component:HomeComponent},
  {path : 'about' ,canActivate:[AuthGuard] , component:AboutComponent},
  {path : 'contacts', canActivate:[AuthGuard] , component:ContactsComponent},
  {path : 'moviedetails/:id', canActivate:[AuthGuard] , component:MoviedetailsComponent},
  {path : 'setting' , loadChildren : ()=> import('./setting/setting.module').then((m)=> m.SettingModule)},
  {path : 'login' , component:LoginComponent},
  {path : 'register' , component:RegisterComponent},
  {path : '**' , component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
