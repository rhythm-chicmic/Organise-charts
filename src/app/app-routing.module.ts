import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupChartComponent } from './group-chart/group-chart.component';
import { AppComponent } from './app.component';
import { SingleOrgTreeComponent } from './single-org-tree/single-org-tree.component';
import { NgPrimeComponent } from './ng-prime/ng-prime.component';
import { ChartJsComponent } from './chart-js/chart-js.component';
import { AngularOrgChartComponent } from './angular-org-chart/angular-org-chart.component';
import { NgxOrgChartComponent } from './ngx-org-chart/ngx-org-chart.component';
import { OrgChartkoComponent } from './org-chartko/org-chartko.component';
import { D3ChartsComponent } from './d3-charts/d3-charts.component';
import { ShowDataComponent } from './show-data/show-data.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:GroupChartComponent},
  {path:'simple-tree',component:SingleOrgTreeComponent},
  {path:'primeng',component:NgPrimeComponent},
  {path:'chartjs',component:ChartJsComponent},
  {path:'angular-org',component:AngularOrgChartComponent},
  {path:'ngx-org-chart',component:NgxOrgChartComponent},
  {path:'org-chart-ko',component:OrgChartkoComponent},
  {path:'d3org',component:D3ChartsComponent},
  {path:'showData',component:ShowDataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
