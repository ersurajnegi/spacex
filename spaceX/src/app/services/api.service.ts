import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { queryMapObject, baseUrl } from "./api.config"

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(
    private _http: HttpClient
  ) { }

  getData(queryParams: Object) {
    let test = baseUrl + this.getQueryParams(queryParams);
    return this._http.get(test)
  }

  getQueryParams(query) {
    let url = "";
    Object.keys(query).forEach((item) => {
      url += `&${queryMapObject[item]}=${query[item]}`
    });
    return url;
  }
}
