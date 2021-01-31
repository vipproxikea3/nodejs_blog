const path = require('path');
const express = require('express');
const handlebars  = require('express-handlebars');
const morgan = require('morgan');
const app = express();
const port = 3000;

// config use static file
app.use(express.static(path.join(__dirname,'public')));

// http logger
app.use(morgan('combined'));

// template engine
app.engine('hbs', handlebars({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname,'resources','views'));

app.get('/', function (req, res) {
  res.render('home');
});

app.get('/news', function (req, res) {
  res.render('news');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});