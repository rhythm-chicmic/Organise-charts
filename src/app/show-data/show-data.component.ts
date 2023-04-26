import { Component, OnInit } from '@angular/core';
import * as d3 from "d3";
import * as d3Hierarchy from 'd3-hierarchy';
import * as d3Drag from 'd3-drag'
@Component({
  selector: 'app-show-data',
  templateUrl: './show-data.component.html',
  styleUrls: ['./show-data.component.scss']
})
export class ShowDataComponent implements OnInit{
  data:any;
  ngOnInit(){
    d3.json(
      " http://localhost:3000/data"
    ).then((d1:any )=> {
      console.log(d1)
        this.data = d1;
    });
  }
}
