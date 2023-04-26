import { Component, OnInit } from '@angular/core';
import * as d3 from "d3";
import * as d3Hierarchy from 'd3-hierarchy';
import * as d3Drag from 'd3-drag'
import  data2 from "../../assets/db.json"
@Component({
  selector: 'app-show-data',
  templateUrl: './show-data.component.html',
  styleUrls: ['./show-data.component.scss']
})
export class ShowDataComponent implements OnInit{
  data:any;
  p=data2
  ngOnInit(){
    this.data = Object.values(this.p)[0]
 
  
    // d3.json(
    //   "http://localhost:3000/data"
    // ).then((d1:any )=> {
    //   console.log(d1)
    //     this.data = d1;
    // });
  }
}
