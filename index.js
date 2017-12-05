var exp = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var app = exp();

app.use(bodyParser.urlencoded({ extended:true}));
app.use(exp.static(path.join(__dirname, "public")));
app.use(cookieParser('t'));
app.use(session({secret:'t'}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
var routers = require('./routers');

routers(app);

app.listen(80, function(){
	console.log('start ....');
});


