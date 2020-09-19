import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardLayoutComponent} from './layout/dashboard-layout/dashboard-layout.component';
import {CountdownTimerComponent} from './component/countdown-timer/countdown-timer.component';
import {QuizComponent} from './component/quiz/quiz.component';

const routes: Routes = [
  {
    path: 'home',
    component: DashboardLayoutComponent,
    // children: [{
    //   path: '',
    //   component: DisclaimerViewComponent
    // }]
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
    redirectTo: 'home',
    pathMatch: 'full'
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
