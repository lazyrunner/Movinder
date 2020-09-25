import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardLayoutComponent} from './layout/dashboard-layout/dashboard-layout.component';
import {CountdownTimerComponent} from './component/countdown-timer/countdown-timer.component';
import {QuizComponent} from './component/quiz/quiz.component';
import {LoginComponent} from './component/login/login.component';
import {GroupsComponent} from './component/groups/groups.component';
import {MoviesComponent} from './component/movies/movies.component';
import {MatchesComponent} from './component/matches/matches.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'groups',
    component: DashboardLayoutComponent,
    children: [{
      path: '',
      component: GroupsComponent
    }]
  },
  {
    path: 'movies',
    component: DashboardLayoutComponent,
    children: [{
      path: '',
      component: MoviesComponent
    }]
  },
  {
    path: 'matches',
    component: DashboardLayoutComponent,
    children: [{
      path: '',
      component: MatchesComponent
    }]
  },
  {
    path: 'day2',
    component: DashboardLayoutComponent,
    children: [{
      path: '',
      component: CountdownTimerComponent
    }]
  },
  {
    path: 'day3',
    component: DashboardLayoutComponent,
    children: [{
      path: '',
      component: QuizComponent
    }]
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
