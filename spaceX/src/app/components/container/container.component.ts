import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  filtersApplied: any;

  listOfPrograms: Array<any>

  constructor(
    private _api: ApiService,
    private _router: Router,
    private _route: ActivatedRoute,) {
    this.filtersApplied = {};
    this.listOfPrograms = [];
  }

  ngOnInit() {
    this._route.queryParams.subscribe((queryParams) => {
      this.filtersApplied = Object.assign({}, this.filtersApplied, queryParams);
      this.getData();
    })
  }

  applyFilters(filters: any) {
    this.filtersApplied = Object.assign({}, this.filtersApplied, filters);
    this._router.navigate([''], { queryParams: this.filtersApplied });
  }

  getData() {
    this._api.getData(this.filtersApplied).subscribe((data: any) => {
      this.listOfPrograms = data;
    })
  }
}


