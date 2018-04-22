var express = require('express');
var router = express.Router();

var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;

passport.use(new FacebookStrategy({
    clientID: '480340372368882',
    clientSecret: 'd47d3b7fd9427313248f3f23788d2e0b',
    callbackURL: "https://localhost:3000/auth/facebook/callback"
},
    function (accessToken, refreshToken, profile, done) {
        console.log('done');
        console.log(profile);
        done(null, profile);
    })
);

router.get('/facebook', passport.authenticate('facebook', { scope: ['public_profile', 'email']}));

router.get('/facebook/callback',
    passport.authenticate('facebook', {
        successRedirect: '/',
        failureRedirect: '/login'
    }), function(req, res) {
        console.log('callback');
        console.log(req);
        console.log(res);
    }
);

module.exports = router;
