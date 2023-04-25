import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GroupChartComponent } from './group-chart/group-chart.component';
import { SingleOrgTreeComponent } from './single-org-tree/single-org-tree.component';
import { OrganizationChartModule } from 'primeng/organizationchart';
import { NgPrimeComponent } from './ng-prime/ng-prime.component';
import { ChartJsComponent } from './chart-js/chart-js.component';
import { NgChartsModule } from 'ng2-charts';
import { OrgChartModule } from 'angular13-organization-chart';
import { AngularOrgChartComponent } from './angular-org-chart/angular-org-chart.component';
import { NgxOrgChartComponent } from './ngx-org-chart/ngx-org-chart.component';
import { NgxOrgChartModule } from 'ngx-org-chart';
@NgModule({
  declarations: [
    AppComponent,
    GroupChartComponent,
    SingleOrgTreeComponent,
    NgPrimeComponent,
    
    ChartJsComponent,
    AngularOrgChartComponent,
    NgxOrgChartComponent
  ],
  imports: [
    BrowserModule,
    OrgChartModule,
    NgxOrgChartModule,
    OrganizationChartModule,
    NgChartsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
