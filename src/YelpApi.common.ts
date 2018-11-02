import { Observable } from 'tns-core-modules/data/observable';
import { ios as iosUtils } from "tns-core-modules/utils/utils";

export interface ParsedYLPCategories {
  alias: string;
  name: string;
}

export class Common extends Observable {

  public parseBusiness (business: YLPBusiness) {
    return {
      name: business.name,
      closed: business.closed,
      website: business.URL.absoluteString,
      categories: this.parseCategories(business.categories),
      location: this.parseYelpLocation(business.location),
      rating: business.rating,
      reviewCount: business.reviewCount,
      phone: business.phone
    };
  }

  public parseCategories(categories: NSArray<YLPCategory>): ParsedYLPCategories[] {
    const convCategories: any[] = iosUtils.collections.nsArrayToJSArray(categories);
    const categoryResults: ParsedYLPCategories[] = convCategories.map((category: YLPCategory) => this.parseYLPCategories(category));
    return categoryResults;
  }

  public parseYLPCategories(category: YLPCategory): ParsedYLPCategories {
    return {
      alias: category.alias,
      name: category.name
    };
  }

  public parseYelpLocation(location: YLPLocation) {
    return {
        address: location.address,
        city: location.city,
        coordinate: this.parseCoordinates(location.coordinate),
        countryCode: location.countryCode,
        postalCode: location.postalCode,
        stateCode: location.stateCode
      };
  }

  public parseCoordinates(coordinates: YLPCoordinate) {
    return {
      latitude: coordinates.latitude,
      longitude: coordinates.longitude
    };
  }

  public parseReviews(reviews: YLPBusinessReviews) {
    return {
      reviews: iosUtils.collections.nsArrayToJSArray(reviews.reviews).map((review => this.parseReview(review))),
      total: reviews.total
    };
  }

  public parseReview(review: any) {
    return {
      message: review.excerpt,
      rating: review.rating,
      timeCreate: review.timeCreated,
      user: review.user
    };
  }


}
