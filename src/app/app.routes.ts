import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { Error404Component } from './error404/error404.component';
import { BasictableComponent } from './basictable/basictable.component';
import { BlankComponent } from './blank/blank.component';
import { FontawesomeComponent } from './fontawesome/fontawesome.component';
import { MapgoogleComponent } from './mapgoogle/mapgoogle.component';


const routes: Routes = [
  { path: '', component: DashboardComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'error404', component: Error404Component},
  { path: 'basictable', component: BasictableComponent},
  { path: 'blank', component: BlankComponent},
  { path: 'fontawesome', component: FontawesomeComponent},
  { path: 'mapgoogle', component: MapgoogleComponent},
  { path: '**', component: DashboardComponent}
  //{ path: 'path/:routeParam', component: MyComponent },
  //{ path: 'staticPath', component: ... },
  //{ path: '**', component: ... },
  //{ path: 'oldPath', redirectTo: '/staticPath' },
  //{ path: ..., component: ..., data: { message: 'Custom' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule {}

