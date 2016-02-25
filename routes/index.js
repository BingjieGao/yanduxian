var express = require('express');
var router = express.Router();

var mongodb = require('mongod');

var mongoose = require('mongoose');


//userdb connection
var userdb = require('../models/userdb');
var users = require('../routes/users');


/* GET home page.
* all post list*/
router.get('/', function(req, res, next) {
  res.render('index', { title: 'CatAmo',header:'Welcome'});
});

//Post Blogs
router.get('/blog/post',function(req,res,next){
  res.render('post',{title:'POST BLOGS'})
});

router.post('/blog/post',function(req,res,next){
  res.render('test',{title:'TEST'})
});

//list all the blogs
router.get('/blog/list',function(req,res,next){
});

//list all the users
router.get('/admin',users.list);
//LOGIN page
router.get('/user/login',function(req,res,next){
  res.render('login',{title:'LOGIN'})
})

router.post('/user/login',function(req,res,next){
  res.render('test',{title:'TEST'});
})


//--------------------------------------------------
router.get('/user/reg',function(req,res,next){
  res.render('reg',{title:'SIGN UP'})
});


router.post('/user/reg',users.reg);
//----------------------------------------------------

module.exports = router;
