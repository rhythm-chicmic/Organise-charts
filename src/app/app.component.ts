import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import OrgChart from "@balkangraph/orgchart.js";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'orgChart';
  constructor(private router:Router){}
  home(){
this.router.navigate(['home'])
  }
  singleTree(){
  this.router.navigate(['simple-tree'])
  }
  primeNg(){
    this.router.navigate(['primeng'])
  }

}