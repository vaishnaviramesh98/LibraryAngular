const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@ictfiles.0myiv.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority');
const Schema = mongoose.Schema;

var NewAuthorSchema = new Schema({
    authorName:String,
    authorNationality:String,
    authorAge:String,
    authorImage:String
});

var Authordata = mongoose.model('authordatas',NewAuthorSchema);           

module.exports = Authordata;