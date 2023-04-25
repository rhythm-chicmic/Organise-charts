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
import { OrgchartModule } from '@dabeng/ng-orgchart';
import { OrgChartkoComponent } from './org-chartko/org-chartko.component';
import { D3ChartsComponent } from './d3-charts/d3-charts.component';
import { ShowDataComponent } from './show-data/show-data.component';


@NgModule({
  declarations: [
    AppComponent,
    GroupChartComponent,
    SingleOrgTreeComponent,
    NgPrimeComponent,
    
    ChartJsComponent,
    AngularOrgChartComponent,
    NgxOrgChartComponent,
    OrgChartkoComponent,
    D3ChartsComponent,
    ShowDataComponent
  ],
  imports: [
    BrowserModule,
    OrgChartModule,
    NgxOrgChartModule,
    OrganizationChartModule,
    NgChartsModule,
    OrgchartModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
