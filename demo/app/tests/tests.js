var YelpApi = require("nativescript-YelpApi").YelpApi;
var yelpApi = new YelpApi();

describe("greet function", function() {
    it("exists", function() {
        expect(yelpApi.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(yelpApi.greet()).toEqual("Hello, NS");
    });
});