import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GroupChartComponent } from './group-chart/group-chart.component';
import { SingleOrgTreeComponent } from './single-org-tree/single-org-tree.component';

@NgModule({
  declarations: [
    AppComponent,
    GroupChartComponent,
    SingleOrgTreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
