var chai = require('chai');
var request = require('supertest');

// https://glebbahmutov.com/blog/how-to-correctly-unit-test-express-server/

describe('Views', function() {
    var server;

    beforeEach(function() {
        server = require('../index');
    });
    afterEach(function() {
        server.close();
    });
    it('/hello', function() {
        request(server).get('/hello')
                       .expect('Hello Nico!');
    });
});
