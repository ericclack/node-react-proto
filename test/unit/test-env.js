var expect = require('chai').expect;

// ENV vars are set on the command line, you can script this
// in your home directory or use Heroku control panel(?) to
// set them. They must not be defined in this source repo!
// (Google 12 factor app for why)

describe('Test presence of env vars', function() {

    test_it = function(key) {
        it('Test env for ' + key), function() {
            t = process.env[key];
            expect(t).to.exist();
        }
    };

    test_it('STORMPATH_CLIENT_APIKEY_ID');
    test_it('STORMPATH_CLIENT_APIKEY_SECRET');
    test_it('STORMPATH_APPLICATION_HREF');
});


