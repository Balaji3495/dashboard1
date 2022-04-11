import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './layout/component/dashboard/dashboard.component';
import { MapsComponent } from './layout/component/maps/maps.component';
import { Down2LiftsComponent } from './layout/component/table/down2-lifts/down2-lifts.component';
import { EntrapmentComponent } from './layout/component/table/entrapment/entrapment.component';
import { StateComponent } from './layout/component/table/state/state.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path:'',
    component : LayoutComponent,


  children: [{
      path:'dashboard',
      component : DashboardComponent,

  },
  {
    path:'down2',
    component : Down2LiftsComponent,
  },
  {
    path:'entrapment',
    component : EntrapmentComponent,
  },
  {
    path:'state',
    component : StateComponent,
  },
  {
    path:'maps',
    component : MapsComponent,
  },
  {
    path: '',
    redirectTo: 'maps',
    pathMatch: 'full'
  }
]
}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
