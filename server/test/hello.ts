/**
 * Created by jacob on 5/25/17.
 */

import {assert, expect, request, should, use} from 'chai';
import chaiHttp = require('chai-http');
import {app} from '../app';

use(chaiHttp);


describe('Server Connect', () => {
  request(app)
    .get('/api/v1/hello')
    .end((err, res) => {
      expect(err).to.be.null;
    });


});
// describe('Server Connect2', () => {
//
// request('http://localhost:4300')
//   .get('/api/v1/hello')
//   .end((err, res) => {
//     expect(err).to.be.null;
//   });
// });


describe('Sample Test', () => {

  describe('get()', () => {
    it('Should respond with Hello Jacob', () => {

      const res = 'Hello, Jacob?';
      expect(res).to.exist;
      expect(res).to.deep.equal('Hello, Jacob?');
    });
  });
});

describe('Hello API', () => {

  describe('post()', () => {
    it('Should respond with Nice Post, Jacob', (done) => {
      request(app)
          .post('/api/v1/hello')
          .end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res).to.be.json;
            expect(res.body).to.equal('Nice Post, Jacob!!!');
            done();
          });
    });
  });

  describe('get()', () => {
    it('Should respond with Hello, Jacob', (done) => {
      request(app)
        .get('/api/v1/hello')
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          expect(res).to.be.json;
          expect(res.body).to.equal('Hello, Jacob?');
          done();
        });
    });
  });
});


// it('fails with uncaught exception', function (done) {
//   setTimeout(function () {
//     assert.equal(1, 2);
//     done();
//   }, 1000);
// });
//
// it('fails with assertion error', function (done) {
//   setTimeout(function () {
//     try {
//       assert.equal(1, 2);
//       done();
//     }
//     catch (e) {
//       done(e);
//     }
//   }, 1000);
// });
