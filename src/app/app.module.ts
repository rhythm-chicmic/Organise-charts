import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GroupChartComponent } from './group-chart/group-chart.component';
import { SingleOrgTreeComponent } from './single-org-tree/single-org-tree.component';
import { OrganizationChartModule } from 'primeng/organizationchart';
import { NgPrimeComponent } from './ng-prime/ng-prime.component';
@NgModule({
  declarations: [
    AppComponent,
    GroupChartComponent,
    SingleOrgTreeComponent,
    NgPrimeComponent
  ],
  imports: [
    BrowserModule,
    OrganizationChartModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
