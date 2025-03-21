import PetData from "../data-helper/petData";
import Params from "../data-helper/params";

describe("Pet Tests", () => {
  const data = new PetData();
  const params = new Params();
  var url = params.url();

  it("Create Pet", () => {
    cy.request({
      method: "POST",
      url: url + "/v2/pet",
      body: data.bodyPetPayload(),
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it("Get Pet ", () => {
    cy.request("GET", url + "/v2/pet/1").then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it("Get Pet Status ", () => {
    cy.request("GET", url + "/v2/pet/findByStatus?status=pending").then(
      (response) => {
        expect(response.status).to.eq(200);
      }
    );
  });

  it("Update Pet Info", () => {
    cy.request({
      method: "POST",
      url: url + "/v2/pet",
      body: data.updatePetPayload(),
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it("Delete Pet", () => {
    cy.request({
      method: "DELETE",
      url: url + "/v2/pet/1",
      headers: data.headerPayload(),
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it("Delete Pet", () => {
    cy.request({
      method: "DELETE",
      url: url + "/v2/pet/1",
      headers: data.headerPayload(),
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(404);
    });
  });
});
