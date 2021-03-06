var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 8000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', (request, response) => (
    response.render('pages/index')
));

app.get('/hello', (request, response) => {
    const name = request.query.name || 'Nico';
    response.send('Hello ' + name + '!')
});

var server = app.listen(app.get('port'), () => (
    console.log('Node app is running on port', app.get('port'))
));

module.exports = server
