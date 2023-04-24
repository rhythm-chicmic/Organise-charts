import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupChartComponent } from './group-chart/group-chart.component';
import { AppComponent } from './app.component';
import { SingleOrgTreeComponent } from './single-org-tree/single-org-tree.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:GroupChartComponent},
  {path:'simple-tree',component:SingleOrgTreeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
