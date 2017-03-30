
var express = require("express");
var path = require("path");
var app = express();
var bodyParser = require('body-parser');



// var Friend = mongoose.model('Friend', FriendSchema);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('client'));
// app.set('views', path.join(__dirname, './views'));
app.use(express.static('bower_components'))
app.use(bodyParser.json())

require(path.join(__dirname,'./server/config/mongoose.js'));
var routes_setter = require(path.join(__dirname,'./server/config/routes.js'));
routes_setter(app);

// app.get('/', function(request, response){
//   console.log('GET-Home');
//
// })
// app.post('/users', function(request, response) {
//  console.log("POST DATA", request.body);
//  response.redirect('/');
// })

app.listen(8000, function() {
 console.log("listening on port 8000");
});
