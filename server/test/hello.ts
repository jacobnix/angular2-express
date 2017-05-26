/**
 * Created by jacob on 5/25/17.
 */

import {expect} from "chai";
import "mocha";
import chai = require("chai");

chai.should();

describe("Hello", () => {

  describe("get()", () => {
    it("Should respond with Hello Jacob", () => {

      const res = "Hello, Jacob?";
      return (res.should.exist && res.should.equal("Hello, Jacob?"));
    });
  });
});

describe("Hello", () => {

  describe("get()", () => {
    it("Should respond with Hello Jacob", () => {

      const res = "Hello, Jacob?";
      expect(res).should.exist;
      expect(res).should.equal("Hello, Jacob?");
    });
  });
});
