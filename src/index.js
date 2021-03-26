const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const methidOverride = require('method-override');
const session = require('express-session');

//Initializations
const app = express();
require('./database');
//Settings
app.set('port', process.env.PORT || 3000); //if a port already exists, use it. if not, use 3000
app.set('views', path.join(__dirname, 'views')); // concatenate with folder src. //handlebars
app.engine('.hbs', exphbs({
defaultLayout: 'main',
layoutsDir: path.join(app.get('views'), 'layouts'),
partialsDir: path.join(app.get('views'), 'partials'),
extname: '.hbs'
}));
app.set('view engine', '.hbs');

//Middlewares
app.use(express.urlencoded({extended: false}));
app.use(methidOverride('_method'));
app.use(session({
secret: 'mysecretapp',
resave: true,
saveUninitialized: true        
}));


//Global variables


//Routes
app.use(require('./routes/index'));
app.use(require('./routes/notes'));
app.use(require('./routes/users'));

//Static Files
app.use(express.static(path.join(__dirname, 'public')));

//Server is listening
app.listen(app.get('port'), () => {
        console.log('Server on port', app.get('port'));
});