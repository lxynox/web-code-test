(function () {
    var express = require('express');
    var path = require('path');
    var fs = require('fs');
    var _ = require('underscore');

    var app = express();
    var port = process.env.PORT || 3000;


    app.use(express.static(path.resolve(__dirname, '../client')));

    app.listen(port, function () {
        console.log('Server is running on port: ', port);
    });

    //--------API routes------------//

    app.get('/api/categories', function (req, res) {
        var categoriesJson = require('../server/stubs/categories.json');
        return res.json(categoriesJson);
    });

    app.get('/api/categories/:categoryId/articles', function (req, res) {
        var categoryId = parseInt(req.params.categoryId);
        var articlesJson = require('../server/stubs/articles.json');
        var articlesJsonFiltered = _.filter(articlesJson, function (article) {
            return article.category.id === categoryId;
        });
        return res.json(articlesJsonFiltered);
    });

    app.get('/api/articles/:articleId', function (req, res) {
        var articleId = parseInt(req.params.articleId);
        var articlesJson = require('../server/stubs/articles.json');
        var article;
        for (var i = 0; i < articlesJson.length; i++) {
            var thisArticle = articlesJson[i];
            if (thisArticle.id === articleId) {
                article = thisArticle;
                break;
            }
        }

        if (article) {
            return res.json(article);
        }
        return res.status(404).json({message: 'Article not found'})
    });

    app.post('/api/suggestions', function (req, res) {
        return res.send(201).json({message: 'Thanks! Your suggestion has been submitted.'});
    });

    //--------Page routes------------//

    app.get('/mockups/articles', function (req, res) {
        res.sendFile('articles.html', {root: path.join(__dirname, '../client/mockups')});
    });

    app.get('/mockups/article', function (req, res) {
        res.sendFile('article.html', {root: path.join(__dirname, '../client/mockups')});
    });

    app.get('/mockups/suggestions', function (req, res) {
        res.sendFile('suggestions.html', {root: path.join(__dirname, '../client/mockups')});
    });

    app.get('/mockups', function (req, res) {
        res.sendFile('index.html', {root: path.join(__dirname, '../client/mockups')});
    });

    app.get('/', function (req, res) {
        res.sendFile('index.html');
    });

}());
