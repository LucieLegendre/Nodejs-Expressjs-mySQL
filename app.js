// set variables for app
var express     = require('express');
var bodyParser  = require('body-parser');
var app         = express();
var path        = require('path');
var mysql       = require('mysql');


//import des paramètres de connexion
var configDB = require('./configDB');

//création de l'objet connexion MySQL
var connection = mysql.createConnection(configDB);
//connexion
connection.connect();

//récupération des éléments de l'url
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//déclaration du fichier de route a utiliser
var apiRouter = require('./routers/api')(express, connection);

//déclare la route en soi
app.use('/api', apiRouter);


module.exports = app; // app de index.js