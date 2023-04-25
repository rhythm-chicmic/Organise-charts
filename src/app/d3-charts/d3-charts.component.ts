import { Component, ElementRef, Input, OnChanges, OnInit, ViewChild } from '@angular/core';
import { OrgChart } from 'd3-org-chart';


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
      .svgWidth(500)
      .initialZoom(0.4)
      .onNodeClick((d:any) => console.log(d + ' node clicked'))
      .render();
  }
}