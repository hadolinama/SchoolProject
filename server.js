var express = require('express');
var path = require('path'); //creates the path to different pages
var exphbs = require("express-handlebars");
var bodyParser = require('body-parser');
var app = express();
var port = 3000;





app.set('port', port);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));
// the ff below turns on handlebars and look for main as default file
app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars');


//routes
app.get('/', function(req, res) {
   res.sendFile(path.join(__dirname + '/public/assets/htmlFiles/main.html'));

});
app.get('/about', function(req, res) {
    res.render("about",);
});
app.get('/login', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/assets/htmlFiles/login.html'));
});
app.get('/enroll', function(req, res) {
     res.sendFile(path.join(__dirname + '/public/assets/htmlFiles/enroll.html'));
    // res.render("enroll");
});
app.get('/teachers', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/assets/htmlFiles/teachers.html'));
});

app.get('/contact', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/assets/htmlFiles/contact.html'));
});
app.get('/registered', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/assets/htmlFiles/resgistered.html'));
});

app.listen(port, function (error) {
    if (error) throw err;
    else {
        console.log('\n...server listening on port %i', port);
    }
});
