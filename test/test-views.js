var chai = require('chai');
var request = require('supertest');

// https://glebbahmutov.com/blog/how-to-correctly-unit-test-express-server/

describe('Views', function() {
    var server;

    beforeEach(function() {
        server = require('../server');
    });
    afterEach(function() {
        server.close();
    });

    it('/hello', function(done) {
        request(server).get('/hello')
                       .expect('Hello Nico!', done);
    });
    it('Hello fred', function(done) {
        request(server).get('/hello?name=fred')
                       .expect('Hello fred!', done);
    });
});
