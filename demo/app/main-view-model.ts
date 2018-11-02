import { Observable } from 'tns-core-modules/data/observable';
import { YelpApi } from 'nativescript-YelpApi';

export class HelloWorldModel extends Observable {
  public message: string;
  private yelpApi: YelpApi;

  constructor() {
    super();

    this.yelpApi = new YelpApi('pt8IbG3mSBaQqFOk33scM5cgIFcRW6OwS0HLxmezgGg9tmOhS44yZliy3zUYY0gLVhyhpBy84VQ_YcdZj9dOylmP9HSOA0E_qN4B7cRiKqdo_QBh0UUpEMVautIxWnYx');
    this.yelpApi.businessSearchWithNumber('+12038655762')
      .then((data) => {});

    this.yelpApi.businessSearchWithId('jfqLSA2Ic9gC9BpahJLbTA')
      .then((data) => {});

    this.yelpApi.businessReviewsWithId('jfqLSA2Ic9gC9BpahJLbTA')
      .then((data) => {});

    this.yelpApi.searchWithCoordinates({latitude: 41.302918, longitude: -72.916899})
      .then((data) => {});

    this.yelpApi.searchWithLocation('New York City')
      .then((data) => {});

    this.yelpApi.searchWithLocationTermLimitOffsetSort('New Haven', 'ramen', 5, 0, YLPSortType.BestMatched)
      .then((data) => console.log(data));
  }
}
