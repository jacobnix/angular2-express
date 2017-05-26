/**
 * Created by jacob on 5/25/17.
 */

import {assert, expect, request, should, use} from "chai";
import chaiHttp = require("chai-http");
import {app} from "../app";

use(chaiHttp);

request(app).get("/");
request("http://localhost:4300").get("/api/v1/hello");

describe("Sample Test", () => {

  describe("get()", () => {
    it("Should respond with Hello Jacob", () => {

      const res = "Hello, Jacob?";
      expect(res).to.exist;
      expect(res).to.deep.equal("Hello, Jacob?");
    });
  });
});

describe("Hello API", () => {

  describe("get()", () => {
    it("Should response with Hello Jacob", (done) => {
      request(app)
          .post("/api/v1/hello")
          .end((err, res) => {
            expect(res).to.have.status(200);
            done();
          });
    });
  });
});

