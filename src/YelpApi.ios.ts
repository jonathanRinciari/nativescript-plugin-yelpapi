import { Common } from './YelpApi.common';

import { ios as iosUtils } from 'tns-core-modules/utils/utils';

declare var YLPClient;
declare var YLPCoordinate;
export class YelpApi extends Common {
  _client;
  constructor(apiKey: string) {
    super();
    this._client = YLPClient.alloc().initWithAPIKey(apiKey);
  }

  public businessSearchWithNumber(phone: string) {
    return new Promise((resolve, reject) => {
      this._client.businessWithPhoneNumberCompletionHandler(phone, (search: YLPSearch, err: NSError) => {
        if (err) reject(err);
        const business = search.businesses[0];
        resolve(this.parseBusiness(business));
      });
    });
  }

  public businessSearchWithId(id: string) {
    return new Promise((resolve, reject) => {
      this._client.businessWithIdCompletionHandler(id, (business: YLPBusiness, err: NSError) => {
        if (err) reject(err);
        resolve(this.parseBusiness(business));
      });
    });
  }

  public businessReviewsWithId(id: string) {
    return new Promise((resolve, reject) => {
      this._client.reviewsForBusinessWithIdCompletionHandler(id, (business: YLPBusinessReviews, err: NSError) => {
        if (err) reject(err);
        const parsedReviews = this.parseReviews(business);
        resolve(parsedReviews);
      });
    });
  }

  public searchWithCoordinates(coordinates: {latitude: number, longitude: number}) {
    return new Promise((resolve, reject) => {
      const ylpCoordinates: YLPCoordinate = YLPCoordinate.new().initWithLatitudeLongitude(coordinates.latitude, coordinates.longitude);
      this._client.searchWithCoordinateCompletionHandler(ylpCoordinates, (search: YLPSearch , err: NSError) => {
        if (err) reject(err);
        const businessesInCoordiantes = iosUtils.collections.nsArrayToJSArray(search.businesses);
        const parsedBusinesses = businessesInCoordiantes.map((business: any) => this.parseBusiness(business));
        resolve(parsedBusinesses);
      });
    });
  }

  public searchWithLocation(location: string) {
    return new Promise((resolve, reject) => {
      this._client.searchWithLocationCompletionHandler(location, (search: YLPSearch, err) => {
        if (err) reject(err);
        const businessesInCoordiantes = iosUtils.collections.nsArrayToJSArray(search.businesses);
        const parsedBusinesses = businessesInCoordiantes.map((business: any) => this.parseBusiness(business));
        resolve(parsedBusinesses);
      });
    });
  }

  public searchWithLocationTermLimitOffsetSort(location: string, term: string, limit: number, offset: number, sort: YLPSortType) {
    return new Promise((resolve, reject) => {
      this._client.searchWithLocationTermLimitOffsetSortCompletionHandler(location, term, limit, offset, sort, (search, err) => {
        if (err) reject(err);
        const businessesInCoordiantes = iosUtils.collections.nsArrayToJSArray(search.businesses);
        const parsedBusinesses = businessesInCoordiantes.map((business: any) => this.parseBusiness(business));
        resolve(parsedBusinesses);
      });
    });
  }
}
