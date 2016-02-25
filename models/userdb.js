var mongoose = require('mongoose');

var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/testdb/userdb');

var userSchema = mongoose.Schema({
    timestamp: {type:Date, default:Date.now()},
    username: {type:String, required:true},
    useremail: {type:String, required:true},
    usertype: {type:Number, required:true, default:1},
    password: {type:String, required:true},
    date: {type:Date, default:Date.now()}
});


var USERDB = mongoose.model('USERDB',userSchema);





module.exports = mongoose.model('USERDB',userSchema);



