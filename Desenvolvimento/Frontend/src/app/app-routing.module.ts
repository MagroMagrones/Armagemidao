import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AuthGuardGuard } from './services/auth-guard.guard';
import { NewPasswordComponent } from './components/new-password/new-password.component';

const protectedRoutes: Routes = [
  { path: 'user', component: UserComponent, pathMatch: 'full' }
];
const publicRoutes: Routes = [
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'new-pass', component: NewPasswordComponent },
  { path: 'user', component: UserComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

const routes: Routes = [
  {
    path: '',
    children: protectedRoutes,
    canActivate: [AuthGuardGuard]
  },
  { path: '', children: publicRoutes }
];
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  providers: []
})
export class AppRoutingModule {}
