import { Component, OnInit } from '@angular/core';
import * as d3 from "d3";
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
        this.data = d1;
    });
  }
}
