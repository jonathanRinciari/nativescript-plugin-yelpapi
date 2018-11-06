import { YelpApi } from 'nativescript-YelpApi';

export class YelpApiService {
  private _client: YelpApi;
  constructor() {}

  init(apikey: string) {
    this._client = new YelpApi(apikey);
  }

  searchByPhone(phone: string) {
    return new Promise((resolve, reject) => {
      this._client.businessSearchWithNumber(phone)
        .then((results: YLPBusiness) => resolve(results))
        .catch(err => reject(err));
    });
  }
}