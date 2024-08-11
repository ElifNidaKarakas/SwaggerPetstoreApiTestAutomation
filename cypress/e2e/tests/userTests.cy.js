import Params from "../data-helper/params";
import UserData from "../data-helper/userData";

describe("User Tests", () => {
  const userData = new UserData();
  const params = new Params();
  var url = params.url();

  it("Create User", () => {
    cy.request({
      method: "POST",
      url: url + "/v2/user",
      body: userData.bodyPayload(),
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it("Get User Info", () => {
    cy.request("GET", url + "/v2/user/nida").then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it("Update User", () => {
    cy.request({
      method: "PUT",
      url: url + "/v2/user/nida",
      body: userData.updatePayload("nisa", "elif"),
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it("Delete User", () => {
    cy.request({
      method: "DELETE",
      url: url + "/v2/user/nida",
      headers: userData.headerPayload(),
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it("Delete User", () => {
    cy.request({
      method: "DELETE",
      url: url + "/v2/user/nida",
      headers: userData.headerPayload(),
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(404);
    });
  });
});
