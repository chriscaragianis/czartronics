var express = require('express');
var newPostRoute = require('./routes/newPostRoute.js');
var app = express();
var bodyParser = require('body-parser');
var exphbs  = require('express-handlebars');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.set('views', './');

app.engine('handlebars', exphbs({defaultLayout: ''}));
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
  res.render('./new_post.html.handlebars');
});

app.post('/newBlogPost', function (req, res) {
  newPostRoute['/newBlogPost'].fn(req.body, res);
});


var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
