import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Component/login/login.component';
import { PageNotFoundComponent } from './Component/page-not-found/page-not-found.component';
import { RegisterComponent } from './Component/register/register.component';
import { MovieListComponent } from './Component/movie-list/movie-list.component';
import { MovieDetailComponent } from './Component/movie-detail/movie-detail.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AuthGuard } from './Service/auth-canactivate.service';
const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },

  {
    path: 'movies',
    component: MovieListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'movies/:id',
    component: MovieDetailComponent
  },
  {
    path: 'not-found',
    component: PageNotFoundComponent,
    data: { message: 'Page Not Found!!' }
  },
  {
    path: '**',
    redirectTo: '/not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
