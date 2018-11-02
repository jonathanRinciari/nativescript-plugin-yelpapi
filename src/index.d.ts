import { Common } from './YelpApi.common';
export declare class YelpApi extends Common {
  constructor(apiKey: string);
  
  businessSearchWithNumber(phone: string);

  businessSearchWithId(id: string);

  businessReviewsWithId(id: string);

  searchWithLocation(location: string);

  searchWithLocationTermLimitOffsetSort(location: string, term: string, limit: number, offset: number, sort: YLPSortType)

  searchWithCoordinates(coordinates: { latitude: number, longitude: number });
}
