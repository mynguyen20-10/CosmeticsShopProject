import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {

  constructor(private http: HttpClient) { }

  getData(page = 1, limit = 4) {
    return this.http.get("http://localhost:3000/products?_page=" + page + "&_limit=" + limit);
  }
  getDataWithID(id) {
    return this.http.get("http://localhost:3000/products/" + id)
  }
}
