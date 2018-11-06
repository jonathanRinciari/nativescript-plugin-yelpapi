import { Component } from '@angular/core';
import { YelpApiService } from '~/app/services/yelpapi.service';


@Component({
  selector: 'ns-searchByPhone',
  moduleId: module.id,
  templateUrl: './searchByPhone.component.html',
  styleUrls: ['./searchByPhone.component.css']
})
export class SearchByPhoneComponent {
  phone: string = '';
  noResults: boolean = false;
  queryResults;
  constructor(
    private yelpApi: YelpApiService
  ) {}

  search() {
    this.yelpApi.searchByPhone(`+1${this.phone}`)
      .then((results) => {
        if (Object.keys(results).length > 0) {
          this.noResults = false;
          this.phone = '';
          this.queryResults = results;
          console.log(this.queryResults);
        } else {
          this.noResults = true;
        }
      })
      .catch(err => console.error(err));
  }
}