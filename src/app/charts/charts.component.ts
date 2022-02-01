import { Component, OnInit } from '@angular/core';

import * as d3 from 'd3-selection';
import * as d3Scale from 'd3-scale';
import * as d3Array from 'd3-array';
import * as d3Axis from 'd3-axis';
import * as d3Shape from 'd3-shape';
import * as D3 from 'd3';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
	StatsAreaChart: any[] = [];
  
	StatsBarChart: any[] = [];
	
	currentRate = 8;
	private svg2: any;
    g: any;
    private margin = {top: 30, right: 50, bottom: 30, left: 50};
    private width: number;
    private height: number;
	private radius: number;
    private x: any;
    private y: any;
    private svg: any;
    private line: d3Shape.Line<[number, number]>; // this is line defination
	arc: any;
	labelArc: any;
	labelPer: any;
	pie: any;
	color: any;
	svg3: any;
	
	StatsPieChart: any[] = [];
	
	

  constructor() { 
	this.width = 600 - this.margin.left - this.margin.right;
    this.height = 300 - this.margin.top - this.margin.bottom;
	this.line = d3Shape.line()
	this.radius = Math.min(this.width, this.height) / 2;
  }

  ngOnInit(): void {
	this.cargarBarras();
	this.cargarAreas();
    this.buildSvg();
    this.initSvg();
	this.cargarPie();
	  
  }
  
  
  private buildSvg() {
    this.svg = d3.select('#areaChart')
	.append("svg")
    .attr("width", this.width + this.margin.left + this.margin.right)
    .attr("height", this.height + this.margin.top + this.margin.bottom)
  .append("g")
    .attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")");
	this.svg2 = d3.select('#barChart')
      .append('svg');
    this.g = this.svg2.append('g')
      .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');
	
	  
  }
  
  
  private initSvg() {
    this.color = d3Scale.scaleOrdinal()
        .range(['#FFA500', '#00FF00', '#FF0000', '#6b486b', '#FF00FF', '#d0743c', '#00FA9A']);
    this.arc = d3Shape.arc()
        .outerRadius(this.radius - 10)
        .innerRadius(0);
    this.labelArc = d3Shape.arc()
        .outerRadius(this.radius - 40)
        .innerRadius(this.radius - 40);

    this.labelPer = d3Shape.arc()
        .outerRadius(this.radius - 80)
        .innerRadius(this.radius - 80);

    this.pie = d3Shape.pie()
        .sort(null)
        .value((d: any) => d.frequency);

    this.svg3 = d3.select('#pieChart')
        .append('svg')
        .attr('width', '100%')
        .attr('height', '100%')
        .attr('viewBox', '0 0 ' + Math.min(this.width, this.height) + ' ' + Math.min(this.width, this.height))
        .append('g')
        .attr('transform', 'translate(' + Math.min(this.width, this.height) / 2 + ',' + Math.min(this.width, this.height) / 2 + ')');
  }
  private addXandYAxis() {
    this.x = d3Scale.scaleTime().range([0, this.width]);
    this.y = d3Scale.scaleLinear().range([this.height, 0]);
    this.x.domain(d3Array.extent(this.StatsAreaChart, (d) => d.date ));
    this.y.domain(d3Array.extent(this.StatsAreaChart, (d) => d.value ));
    // Configure the X Axis
    this.svg.append('g')
        .attr('transform', 'translate(0,' + this.height + ')')
        .call(d3Axis.axisBottom(this.x));
    // Configure the Y Axis
    this.svg.append('g')
        .attr('class', 'axis axis--y')
        .call(d3Axis.axisLeft(this.y));
		
	
	
  }
  private drawPie() {
	 const g = this.svg3.selectAll('.arc')
        .data(this.pie(this.StatsPieChart))
        .enter().append('g')
        .attr('class', 'arc');
    g.append('path').attr('d', this.arc)
        .style('fill', (d: any) => this.color(d.data.company) );
    g.append('text').attr('transform', (d: any) => 'translate(' + this.labelArc.centroid(d) + ')')
        .attr('dy', '.35em')
        .text((d: any) => d.data.company);

    g.append('text').attr('transform', (d: any) => 'translate(' + this.labelPer.centroid(d) + ')')
        .attr('dy', '.35em')
        .text((d: any) => d.data.frequency + '%');
  }
  
  

  private drawLineAndPath() {
	this.line = d3Shape.line()
        .x( (d: any) => this.x(d.date) )
        .y( (d: any) => this.y(d.value) );
    // Configuring line path
    this.svg.append('path')
        .datum(this.StatsAreaChart)
        .attr('class', 'line')
        .attr('d', this.line);
	
  } 
  
  initAxis() {
    this.x = d3Scale.scaleBand().rangeRound([0, this.width]).padding(0.1);
    this.y = d3Scale.scaleLinear().rangeRound([this.height, 0]);
    this.x.domain(this.StatsBarChart.map((d: any) => d.company));
    this.y.domain([0, d3Array.max(this.StatsBarChart, (d: any) => d.frequency)]);
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
      .data(this.StatsBarChart)
      .enter().append('rect')
      .attr('class', 'bar')
      .attr('x', (d: any) => this.x(d.company))
      .attr('y', (d: any) => this.y(d.frequency))
      .attr('width', this.x.bandwidth())
      .attr('fill', '#498bfc')
      .attr('height', (d: any) => this.height - this.y(d.frequency));
  }
	
	
	cargarBarras(){
		fetch('http://localhost:3001/admin/tablaPaises')
	  .then(texto => texto.json())
	  .then(paises => {
		  this.StatsBarChart = paises;
		  this.initAxis();
		  this.drawAxis();
		  this.drawBars();
	  })
	}
	
	cargarAreas(){
		fetch('http://localhost:3001/admin/tablaSesiones')
	  .then(texto => texto.json())
	  .then(sesiones => {
		   for(let i = 0; i < sesiones.length ; i++){ 
				
				sesiones[i].date = new Date(sesiones[i].date);
			
		  }
		  sesiones.push({date: sesiones[sesiones.length-1].date, value: 0});
		  sesiones.push({date: sesiones[0].date, value: 0});

		  this.StatsAreaChart = sesiones;

		  this.addXandYAxis();
		  this.drawLineAndPath();

	  })
	}
    
	cargarPie(){
		fetch('http://localhost:3001/admin/tablaCategorias')
	  .then(texto => texto.json())
	  .then(noticias => {
		  var total = 0;
		  for (let i = 0; i < noticias.length ; i++){
			total+= noticias[i].frequency;
		  }
		  
		  for (let i = 0; i < noticias.length ; i++){
			noticias[i].frequency = Math.round(noticias[i].frequency*100/total);
		  }
		  this.StatsPieChart = noticias;
			console.log(noticias);
		  console.log(this.StatsPieChart);
		
		
			this.drawPie();
		})
	}

}
