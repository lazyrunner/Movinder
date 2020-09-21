import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardLayoutComponent } from './layout/dashboard-layout/dashboard-layout.component';
import { HeaderComponent } from './shared/component/header/header.component';
import { FooterComponent } from './shared/component/footer/footer.component';
import { CountdownTimerComponent } from './component/countdown-timer/countdown-timer.component';
import { FormsModule } from '@angular/forms';
import { QuizComponent } from './component/quiz/quiz.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './component/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardLayoutComponent,
    HeaderComponent,
    FooterComponent,
    CountdownTimerComponent,
    QuizComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
