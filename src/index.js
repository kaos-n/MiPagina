const express = require('express');
const app = express();
const path = require ('path');

//const puerto = process.env.PORT || 3000;

//settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

//midlewares


// routes
app.use(require('./routes/index'));

//static files
app.use(express.static(path.join(__dirname, 'public')));


//listening the server
app.listen(app.get('port'), () => {
console.log('Servidor en puerto ', app.get('port'));
});
