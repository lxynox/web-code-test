(function () {
    var express = require('express');
    var path = require('path');
    var fs = require('fs');

    var app = express();
    var port =  process.env.PORT || 3000;


    app.use(express.static(path.resolve(__dirname, '../client')));

    app.listen(port, function() {
        console.log('Server is running on port: ', port);
    });

    app.get('/api/articles', function (req, res) {
        var articlesJson = require('../server/stubs/articles.json');
        return res.json(articlesJson);
    });

   app.get('/api/categories', function (req, res) {
        var categoriesJson = require('../server/stubs/categories.json');
        return res.json(categoriesJson);
    });

    app.get('/', function (req, res) {
        res.sendFile('index.html');
    });

}());
