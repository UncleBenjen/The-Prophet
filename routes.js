
var chapters = require('./chapters.js');
var express = require('express');
var router = express.Router();
var hbs = require('express-handlebars').create();

router.get('/', function(req, res){

  res.render('home', chapters.prologue);
});

router.get('/prologue', function(req, res){
	res.render('chapter', chapters.prologue);
});

router.get('/love', function(req, res){
	res.render('chapter', chapters.love);
});

router.get('/marriage', function(req, res){
   res.render('chapter', chapters.marriage);
});

router.get('/children', function(req, res){
   res.render('chapter', chapters.children);
});

router.get('/giving', function(req, res){
   res.render('chapter', chapters.giving);
});

router.get('/eating-and-drinking', function(req, res){
   res.render('chapter', chapters.eatingAndDrinking);
});

router.get('/work', function(req, res){
   res.render('chapter', chapters.work);
});

router.get('/joy-and-sorrow', function(req, res){
   res.render('chapter', chapters.joyAndSorrow);
});

router.get('/houses', function(req, res){
   res.render('chapter', chapters.houses);
});

router.get('/clothes', function(req, res){
   res.render('chapter', chapters.clothes);
});

router.get('/buying-and-selling', function(req, res){
   res.render('chapter', chapters.buyingAndSelling);
});

router.get('/crime-and-punishment', function(req, res){
   res.render('chapter', chapters.crimeAndPunishment);
});

router.get('/laws', function(req, res){
   res.render('chapter', chapters.laws);
});

router.get('/freedom', function(req, res){
   res.render('chapter', chapters.freedom);
});

router.get('/reason-and-passion', function(req, res){
   res.render('chapter', chapters.reasonAndPassion);
});

router.get('/pain', function(req, res){
   res.render('chapter', chapters.pain);
});

router.get('/self-knowledge', function(req, res){
   res.render('chapter', chapters.selfKnowledge);
});

router.get('/teaching', function(req, res){
   res.render('chapter', chapters.teaching);
});

router.get('/friendship', function(req, res){
   res.render('chapter', chapters.friendship);
});

router.get('/talking', function(req, res){
   res.render('chapter', chapters.talking);
});

router.get('/time', function(req, res){
   res.render('chapter', chapters.time);
});

router.get('/good-and-evil', function(req, res){
   res.render('chapter', chapters.goodAndEvil);
});

router.get('/prayer', function(req, res){
   res.render('chapter', chapters.prayer);
});

router.get('/pleasure', function(req, res){
   res.render('chapter', chapters.pleasure);
});

router.get('/beauty', function(req, res){
   res.render('chapter', chapters.beauty);
});

router.get('/religion', function(req, res){
   res.render('chapter', chapters.religion);
});

router.get('/death', function(req, res){
   res.render('chapter', chapters.death);
});

router.get('/farewell', function(req, res){
   res.render('chapter', chapters.farewell);
});

module.exports 	= router;