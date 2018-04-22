import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UniqueShopDetailsComponent } from './unique-shop-details/unique-shop-details.component';
import { AreasComponent } from './areas/areas.component';

const routes: Routes = [
  { path: '', redirectTo: '/area', pathMatch: 'full' },
  { path: 'area', component: AreasComponent },
  { path: 'caketypes/:id', component:  UniqueShopDetailsComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
