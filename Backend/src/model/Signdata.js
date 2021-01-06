const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@ictfiles.0myiv.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority');
const Schema = mongoose.Schema;

var NewSignSchema = new Schema({
    name:String,
    email:String,
    username:String,
    password:String,
    confirmPassword:String
});

var Signdata = mongoose.model('signs', NewSignSchema);              

module.exports =Signdata ;