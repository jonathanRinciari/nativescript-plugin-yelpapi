import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'ns-businessResults',
  moduleId: module.id,
  templateUrl: './businessResults.component.html',
  styleUrls: ['./businessResults.component.css']
})
export class BusinessResultsComponent implements OnInit {
  @Input('results') results: YLPBusiness;
  constructor() {}

  ngOnInit() {
    console.log(this.results);
  }
}