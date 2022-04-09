import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from '../layout/layout.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './component/header/header.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { FooterComponent } from './component/footer/footer.component';
import { EntrapmentComponent } from './component/table/entrapment/entrapment.component';
import { Down2LiftsComponent } from './component/table/down2-lifts/down2-lifts.component';
import { StateComponent } from './component/table/state/state.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { MapsComponent } from './component/maps/maps.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    SidebarComponent,
    DashboardComponent,
    FooterComponent,
    EntrapmentComponent,
    Down2LiftsComponent,
    StateComponent,
    MapsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    LayoutRoutingModule,
    AgmCoreModule
    
  ]
})
export class LayoutModule { }
