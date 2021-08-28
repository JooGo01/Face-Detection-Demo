const express= require('express');
const app=express();
const path = require('path');

//settings

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

//static files

app.use(express.static(path.join(__dirname, '/public')));

//routes

app.use(require('./routes/indexRoute.js'));

//listening port

app.listen(process.env.PORT || 3000, () =>
{
 console.log('server on port', process.env.PORT || 3000);    
});