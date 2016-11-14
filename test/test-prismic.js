var should = require('chai').should();
require('../public/lib/prismic-news');

// What testing of Prismic is required on the server side?
// Currently Prismic code is only run client side.
// When would Prismic require server side code? Maybe 
// if we wanted to only serve content to logged in users?

describe('Prismic', function() {
    var server;

    // This fails
    it('Test the URL', function() {
        PRISMIC_API_URL.should.contain('http://clack');
    });
});


