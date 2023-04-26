import { Component, ElementRef, Input, OnChanges, OnInit, ViewChild } from '@angular/core';
import { OrgChart } from 'd3-org-chart';
import * as d3 from 'd3';
import * as d3Hierarchy from 'd3-hierarchy';
import * as d3Drag from 'd3-drag';
@Component({
  selector: 'app-d3-charts',
  templateUrl: './d3-charts.component.html',
  styleUrls: ['./d3-charts.component.scss']
})
export class D3ChartsComponent implements OnInit, OnChanges {

  @ViewChild('chartContainer') chartContainer!: ElementRef;
  @Input() data!: any[];
  chart:any;

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    if (!this.chart) {
      this.chart = new OrgChart();
    }
    this.updateChart();
  }

  oClick() {
    this.updateChart();
  }

  ngOnChanges() {
    this.updateChart();
  }
  updateChart() {
    if (!this.data) {
      return;
    }
    if (!this.chart) {
      return;
    }
    this.chart
      .container(this.chartContainer.nativeElement)
      .data(this.data)
      .rootMargin(100)
      .nodeWidth((d:any) => 210)
     
      .nodeHeight((d:any) => 140)
      .childrenMargin((d:any) => 130)
      .compactMarginBetween((d:any) => 75)
      .compactMarginPair((d:any) => 80)
      .svgWidth(500)
      .initialZoom(0.7)
      .childrenMargin((d:any) => 80)
      .compactMarginBetween((d:any) => 85)
      .compactMarginPair((d:any) => 90)
      .onNodeClick((d:any) => console.log(d + ' node clicked'))
      .neightbourMargin((n1:any,n2:any)=>180)
      .nodeUpdate((d:any, i:any, arr:any) =>{
        d3.select(this.chartContainer.nativeElement)
            .select('.node-rect')
            .attr("stroke", (d:any) => d.data._highlighted || d.data._upToTheRootHighlighted ? '#152785' : 'none')
            .attr("stroke-width", d.data._highlighted || d.data._upToTheRootHighlighted ? 10 : 1)
    })
      .nodeContent(function (d:any, i:any, arr:any, state:any) {
        const colors = [
          '#6E6B6F',
          '#18A8B6',
          '#F45754',
          '#96C62C',
          '#BD7E16',
          '#802F74',
        ];
        const color = colors[d.depth % colors.length];
        const imageDim = 80;
        const lightCircleDim = 95;
        const outsideCircleDim = 110;


        console.log(d)
        return `
        <div style="background-color:white; position:absolute;width:${
          d.width
        }px;height:${d.height}px;">
           <div style="background-color:${color};position:absolute;margin-top:-${outsideCircleDim / 2}px;margin-left:${d.width / 2 - outsideCircleDim / 2}px;border-radius:100px;width:${outsideCircleDim}px;height:${outsideCircleDim}px;"></div>
           <div style="background-color:#ffffff;position:absolute;margin-top:-${
             lightCircleDim / 2
           }px;margin-left:${d.width / 2 - lightCircleDim / 2}px;border-radius:100px;width:${lightCircleDim}px;height:${lightCircleDim}px;"></div>
           <img src=" ${
             d.data.nodeImage.url
           }" style="position:absolute;margin-top:-${imageDim / 2}px;margin-left:${d.width / 2 - imageDim / 2}px;border-radius:100px;width:${imageDim}px;height:${imageDim}px;" />
           <div class="card" style="top:${
             outsideCircleDim / 2 + 10
           }px;position:absolute;height:30px;width:${d.width}px;background-color:#3AB6E3;">
              <div style="background-color:${color};height:28px;text-align:center;padding-top:10px;color:#ffffff;font-weight:bold;font-size:16px">
                  ${d.data.name} 
              </div>
              <div style="background-color:#F0EDEF;height:28px;text-align:center;padding-top:10px;color:#424142;font-size:16px">
                  ${d.data.positionName} 
              </div>
           </div>
           <div style="display: flex;
           margin-right: 0px;
           float: right;">Id: ${d.id} </div> 
       </div>
`;
  })
      .render();
  }
}