import Params from "../data-helper/params";
import StoreData from "../data-helper/storeData";

describe("Pet Tests", () => {
  const storeData = new StoreData();
  const params = new Params();
  var url = params.url();

  it("Create Store", () => {
    cy.request({
      method: "POST",
      url: url + "/v2/store/order",
      body: storeData.createStoreData(),
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it("Get Store ", () => {
    cy.request("GET", url + "/v2/store/inventory").then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it("Get Store OrderId ", () => {
    cy.request("GET", url + "/v2/store/order/1").then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it("Delete Store", () => {
    cy.request({
      method: "DELETE",
      url: url + "/v2/store/order/1",
      headers: storeData.headerPayload(),
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it("Get Store OrderId ", () => {
    cy.request({
      method: "GET",
      url: url + "/v2/store/order/1",
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(404);
    });
  });

  it("Delete Store", () => {
    cy.request({
      method: "DELETE",
      url: url + "/v2/store/order/1",
      headers: storeData.headerPayload(),
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(404);
    });
  });
});
