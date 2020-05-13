import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {PlayerComponent} from './player/player.component';

const routes: Routes = [
   { path: 'player', component: PlayerComponent }
//  { path: 'heroes', component: HeroesComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


