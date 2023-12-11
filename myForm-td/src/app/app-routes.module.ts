import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TdLoginComponent } from './td-login/td-login.component';
import { RdLoginComponent } from './rd-login/rd-login.component';
import { HomePageComponent } from './home-page/home-page.component';

// App Routes
const appRoutes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'tdlogin', component: TdLoginComponent },
  { path: 'rdlogin', component: RdLoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutesModule {}
