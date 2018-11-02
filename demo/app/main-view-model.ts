import { Observable } from 'tns-core-modules/data/observable';
import { YelpApi } from 'nativescript-YelpApi';

export class HelloWorldModel extends Observable {
  public message: string;
  private yelpApi: YelpApi;

  constructor() {
    super();

    this.yelpApi = new YelpApi();
  }
}
