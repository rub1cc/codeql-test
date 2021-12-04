// import express and js-yaml
var express = require('express');
var yaml = require('js-yaml');

// route load data using js-yaml
var router = express.Router();
router.get('/', function(req, res, next) {
    var data = yaml.safeLoad(fs.readFileSync('502.yaml', 'utf8'));
    res.send(data);
    }
);
