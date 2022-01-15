import { Component, OnInit } from '@angular/core';
import { StatsBarChart } from './data';
import { StatsPieChart } from './data'

import * as d3 from 'd3-selection';
import * as d3Scale from 'd3-scale';
import * as d3Array from 'd3-array';
import * as d3Axis from 'd3-axis';
import * as d3Shape from 'd3-shape';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
	 public title = 'Line Chart';
    data: any[] = [
    {date: new Date('2010-01-01'), value: 40},
    {date: new Date('2010-01-04'), value: 93},
    {date: new Date('2010-01-05'), value: 95},
    {date: new Date('2010-01-06'), value: 130},
    {date: new Date('2010-01-07'), value: 110},
    {date: new Date('2010-01-08'), value: 120},
    {date: new Date('2010-01-09'), value: 129},
    {date: new Date('2010-01-10'), value: 107},
    {date: new Date('2010-01-11'), value: 140},
	{date: new Date('2010-01-11'), value: 40},
  ];

	currentRate = 8;
	private svg2: any;
  g: any;
  private margin = {top: 30, right: 50, bottom: 30, left: 50};
  private width: number;
  private height: number;
  private x: any;
  private y: any;
  private svg: any;
  private line: d3Shape.Line<[number, number]>; // this is line defination

  constructor () {
    // configure margins and width/height of the graph
    this.width = 600 - this.margin.left - this.margin.right;
    this.height = 300 - this.margin.top - this.margin.bottom;
	this.line = d3Shape.line()
  }
  public ngOnInit(): void {
    this.buildSvg();
    this.addXandYAxis();
    this.drawLineAndPath();
	this.initAxis();
    this.drawAxis();
	this.drawBars();
  }
  
  private buildSvg() {
    this.svg = d3.select('#areaChart')
      .append('g')
      .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');
	this.svg2 = d3.select('#barChart')
      .append('svg');
    this.g = this.svg2.append('g')
      .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');
  }
  private addXandYAxis() {
    // range of data configuring
    this.x = d3Scale.scaleTime().range([0, this.width]);
    this.y = d3Scale.scaleLinear().range([this.height, 0]);
    this.x.domain(d3Array.extent(this.data, (d) => d.date ));
    this.y.domain(d3Array.extent(this.data, (d) => d.value ));
    // Configure the X Axis
    this.svg.append('g')
        .attr('transform', 'translate(0,' + this.height + ')')
        .call(d3Axis.axisBottom(this.x));
    // Configure the Y Axis
    this.svg.append('g')
        .attr('class', 'axis axis--y')
        .call(d3Axis.axisLeft(this.y));
  }

  private drawLineAndPath() {
    this.line = d3Shape.line()
        .x( (d: any) => this.x(d.date) )
        .y( (d: any) => this.y(d.value) );
    // Configuring line path
    this.svg.append('path')
        .datum(this.data)
        .attr('class', 'line')
        .attr('d', this.line);
  } 
  initAxis() {
    this.x = d3Scale.scaleBand().rangeRound([0, this.width]).padding(0.1);
    this.y = d3Scale.scaleLinear().rangeRound([this.height, 0]);
    this.x.domain(StatsBarChart.map((d: any) => d.company));
    this.y.domain([0, d3Array.max(StatsBarChart, (d: any) => d.frequency)]);
  }

  drawAxis() {
    this.g.append('g')
      .attr('class', 'axis axis--x')
      .attr('transform', 'translate(0,' + this.height + ')')
      .call(d3Axis.axisBottom(this.x));
    this.g.append('g')
      .attr('class', 'axis axis--y')
      .call(d3Axis.axisLeft(this.y))
      .append('text')
      .attr('class', 'axis-title')
      .attr('transform', 'rotate(-90)')
      .attr('y', 6)
      .attr('dy', '0.71em')
      .attr('text-anchor', 'end')
      .text('Frequency');
  }
  drawBars() {
    this.g.selectAll('.bar')
      .data(StatsBarChart)
      .enter().append('rect')
      .attr('class', 'bar')
      .attr('x', (d: any) => this.x(d.company))
      .attr('y', (d: any) => this.y(d.frequency))
      .attr('width', this.x.bandwidth())
      .attr('fill', '#498bfc')
      .attr('height', (d: any) => this.height - this.y(d.frequency));
  }

}
