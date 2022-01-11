import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $('body').attr("onload","peticion('https://rss.app/feeds/UlT3AP491rmIn4II.xml')");
  }

}
