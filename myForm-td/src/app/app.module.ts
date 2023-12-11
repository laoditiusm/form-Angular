import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TdLoginComponent } from './td-login/td-login.component';
import { RdLoginComponent } from './rd-login/rd-login.component';
import { AppRoutesModule } from './app-routes.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, TdLoginComponent, RdLoginComponent],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutesModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
