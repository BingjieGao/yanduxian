var userdb = require('../models/userdb');

//var return_value;
//check if already registered

var IsExisted = function (data, callback) {
    var return_value;
    userdb.findOne({'useremail': data}, function (err, doc) {

        console.log(data);
        if (!err) {
            if (!doc) {
                console.log('new user');
                return_value = 1;
                callback(null, return_value);
            }
            else {
                console.log('user existed');
                return_value = -1;
                callback(null, return_value);
            }
        }
        else {
            console.log(err);
        }
    });
}

exports.reg = function (req, res, next) {
    var error = "The sending error";
    var username = req.body.username;
    var useremail = req.body.useremail;
    var usertype = 1;
    var password = req.body.password;

    var newuser = new userdb({
        username: username,
        useremail: useremail,
        usertype: usertype,
        password: password,
        date: Date.now()
    });
    IsExisted(useremail, function (err, value) {
        if (value == 1) {
            newuser.save(function (err, newuser) {
                if (err)
                    console.log('err');
                else {
                    error = "successfully registered";
                    console.log('saved');
                    res.end(error);
                }
            });
        }
        else if (value == -1) {
            error = "existed email address";
            console.log('email address existed');
            res.end(error);
        }
    });
};


exports.list = function (req, res, next) {

    userdb.find({}, function (err, doc) {
        if (!err) {
            if (!doc) {
                console.log('Found none');
            }
            else {
                res.render('list', {userdata: doc});
                console.log(doc);
            }

        }
        else
            console.log(err);
    });
    //res.render('list',{title:'User List'});
};























