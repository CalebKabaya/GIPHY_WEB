import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GiphyDetailsComponent } from './giphy-details/giphy-details.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  { path: 'trending', component: GiphyDetailsComponent},
  { path: 'search', component: NavbarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
