// import server basics
const express = require('express');
const handlebars = require('express3-handlebars');
const path = require('path');
const http = require('http');

// import modules
const index = require('./routes/index');
const quiz = require('./routes/quiz');
const tutorial = require('./routes/tutorial');
const blank = require('./routes/blank');

const port = process.env.PORT || 3000;
const app = express();

// create environment
app.set('port', port);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
/* app.use(express.methodOverride());
app.use(express.cookieParser('secret key'));
app.use(express.session());
app.use(app.router()); */
app.use(express.static(path.join(__dirname, 'public')));

// routes
app.get('/', index.view);
app.get('/quiz', quiz.view);
app.get('/tutorial', tutorial.view);
app.get('/blank', blank.view);

// create server and listen on port
http.createServer(app).listen(app.get('port'), function () {
	console.log(`Server listening on port ${app.get('port')}`);
});
