import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import * as d3 from "d3";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
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
  // chartJs(){
  //   this.router.navigate(['chartjs'])
  // }
  angularOrgChart(){
    this.router.navigate(['angular-org'])
  }
  ngxOrgChart(){
    this.router.navigate(['ngx-org-chart'])
  }
  koChart(){
    this.router.navigate(['org-chart-ko']);
  }
  d3Chart(){
    this.router.navigate(['d3org'])
  }
  data:any;

  ngOnInit(){
    // d3.json(
    //   " http://localhost:3000/data"
    // ).then((d1:any )=> {
    //     this.data = d1;
    // });
  }
  show(){
    this.router.navigate(['showData'])
  }


}