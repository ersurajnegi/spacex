import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { yearList } from "./filter.config"
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  @Input()
  filters: any;

  @Output()
  filterApplied: EventEmitter<any> = new EventEmitter<any>();

  filterYears: Array<number> = yearList;
  constructor() { }

  ngOnInit(): void {
  }

  emitEvent(event: any) {
    this.filterApplied.emit(event)
  }

  applyYearFilter(value: any) {
    this.emitEvent({ year: value })
  }
  applyLaunchFilter(value: any) {
    this.emitEvent({ launch: value })
  }
  applyLandFilter(value: any) {
    this.emitEvent({ land: value })
  }

}
