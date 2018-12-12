import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule } from '@angular/forms';

import { ValueSquarerootPipe } from './profile/squareroot.pipe';
import { ValuePowerPipe } from './profile/power.pipe';
import { NavComponent } from './nav/nav.component';

const routes: Routes = [
  { path: '' , redirectTo : 'professional', pathMatch : 'full' },
  { path: 'professional', component: ProfileComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    ValueSquarerootPipe,//custom pipes
    ValuePowerPipe, NavComponent //custom pipes
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
