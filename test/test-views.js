var chai = require('chai');
var request = require('supertest');

// https://glebbahmutov.com/blog/how-to-correctly-unit-test-express-server/

describe('Test views using server', function() {
    var server;

    beforeEach(function() {
        server = require('../server');
    });
    afterEach(function() {
        server.close();
    });

    it('Test Hello fred', function(done) {
        request(server).get('/hello?name=fred')
                       .expect('Hello fred!', done);
    });
    it('Test /hello', function(done) {
        request(server).get('/hello')
                       .expect('Hello Nico!', done);
    });
});
