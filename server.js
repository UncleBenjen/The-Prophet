//DEPENDENCIES
var express = require('express');
var exphbs  = require('express-handlebars');
var routes 	= require('./routes.js');

//EXPRESS APP & VIEW ENGINE
var app = express();
var hbs = exphbs.create({defaultLayout: 'main', partialsDir: [__dirname + '/views/partials', __dirname + '/views/' ], extname:'.handlebars' });

//CONFIG HANDLEBARS (VIEW ENGINE)
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

//CONFIG APP
app.use( express.static(__dirname + '/public') );	//Set static file directory
app.use('/', routes);								//Use routes specified in router.js

//HTTP SERVER INSTANTIATION
var http 	= require('http');
var server 	= http.Server(app);
var port 	= process.env.PORT || 3000;

//SERVER EXECUTION
server.listen(port, function(){
  console.log('Server up, listening on ' + port);
});	