// import express, cookie-parser and passport
var express = require('express');
var cookieParser = require('cookie-parser');
var passport = require('passport');

// use cookie-parser and passport
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());

// route for changeEmail that get new email from cookie
app.get('/changeEmail', function(req, res) {
    var newEmail = req.cookies.email;
    res.render('changeEmail', {
        newEmail: newEmail
    });
    }
);