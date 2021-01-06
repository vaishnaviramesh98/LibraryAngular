const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@ictfiles.0myiv.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority');
const Schema = mongoose.Schema;

var NewBookSchema = new Schema({
    bookName:String,
    authorName: String,
    bookGenre: String,
    imageUrl:String
});

var Bookdata = mongoose.model('bookdatas', NewBookSchema);                        //UserData is the model and NewBookData is the schema

module.exports = Bookdata;