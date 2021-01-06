const express = require('express');
const BookData = require('./src/model/Bookdata');
const AuthorData=require('./src/model/Authordata');
const SignData=require('./src/model/Signdata');
const cors = require('cors');
var bodyparser=require('body-parser');
const jwt = require('jsonwebtoken')
var app = new express();
app.use(cors());
app.use(bodyparser.json());
username='admin';
password='1234';


function verifyToken(req, res, next) {
    if(!req.headers.authorization) {
      return res.status(401).send('Unauthorized request')
    }
    let token = req.headers.authorization.split(' ')[1]
    if(token === 'null') {
      return res.status(401).send('Unauthorized request')    
    }
    let payload = jwt.verify(token, 'secretKey')
    if(!payload) {
      return res.status(401).send('Unauthorized request')    
    }
    req.userId = payload.subject
    next()
  }
//insertbook
app.post('/insert',verifyToken,function(req,res){
   
    console.log(req.body);
   
    var book = {     
      bookName:req.body.book.bookName,
      authorName: req.body.book.authorName,
      bookGenre: req.body.book.bookGenre,
      imageUrl:req.body.book.imageUrl ,
   }       
   var book = new BookData(book);
   book.save();
});
//insert author
app.post('/insertauthor',verifyToken,function(req,res){
   
  console.log(req.body);
 
  var author = {     
    authorName:req.body.author.authorName,
    authorNationality:req.body.author.authorNationality,
    authorAge:req.body.author.authorAge,
    authorImage:req.body.author.authorImage
 }       
 var author = new AuthorData(author);
 author.save();
});
app.post('/sign',function(req,res){
  console.log(req.body);
  var sign={
    mail: req.body.sign.mail,
    pass: req.body.sign.pass
  }
  var sign= new SignData(sign);
  sign.save();
})
app.get('/books',function(req,res){
    
  BookData.find()
                .then(function(books){
                    res.send(books);
                });
});
//author
app.get('/authors',function(req,res){
    
  AuthorData.find()
              .then(function(authors){
                  res.send(authors);
              });
});
app.get('/:id',  (req, res) => {
  
  const id = req.params.id;
  BookData.findOne({"_id":id})
    .then((book)=>{
        res.send(book);
    });
})
//author id
app.get('/author/:id',  (req, res) => {
  
  const id = req.params.id;
    AuthorData.findOne({"_id":id})
    .then((author)=>{
        res.send(author);
    });
})

//sign
app.post('/signn',function(req,res){
  console.log(req.body);
  var sign={
    name: req.body.sign.name,
    email:req.body.sign.email,
    username:req.body.sign.username,
    password:req.body.sign.password,
    confirmPassword:req.body.sign.confirmPassword
  }
  var sign= new SignData(sign);
  sign.save();
})
app.post('/login', (req, res) => {
    let userData = req.body
    
      
        if (!username) {
          res.status(401).send('Invalid Username')
        } else 
        if ( password !== userData.password) {
          res.status(401).send('Invalid Password')
        } else {
          let payload = {subject: username+password}
          let token = jwt.sign(payload, 'secretKey')
          res.status(200).send({token})
        }
      
    })
//updatebook
 app.put('/update',(req,res)=>{
      console.log(req.body)
      id=req.body._id,
      console.log(id);
      bookName= req.body.bookName,
      authorName = req.body.authorName,
      bookGenre = req.body.bookGenre,
      imageUrl = req.body.imageUrl
      BookData.findByIdAndUpdate({"_id":id},
                                  {$set:{"bookName":bookName,
                                  "authorName":authorName,
                                  "bookGenre":bookGenre,
                                  "imageUrl":imageUrl}})
     .then(function(){
         res.send();
     })
   })

//updateauthor
  app.put('/updateauthor',(req,res)=>{
    console.log(req.body)
    id=req.body._id,
    console.log(id);
    authorName=req.body.authorName,
    authorNationality=req.body.authorNationality,
    authorAge=req.body.authorAge,
    authorImage=req.body.authorImage
   AuthorData.findByIdAndUpdate({"_id":id},
                                {$set:{"authorName":authorName,
                                "authorNationality":authorNationality,
                                "authorAge":authorAge,
                                "authorImage":authorImage}})
   .then(function(){
       res.send();
   })
 })
   
app.delete('/remove/:id',(req,res)=>{
   
     id = req.params.id;
     BookData.findByIdAndDelete({"_id":id})
     .then(()=>{
         console.log('success')
         res.send();
     })
   })
     
//author delete
app.delete('/removeauthor/:id',(req,res)=>{
   
    id = req.params.id;
    AuthorData.findByIdAndDelete({"_id":id})
    .then(()=>{
        console.log('success')
        res.send();
    })
  })
    

app.listen(3000, function(){
    console.log('listening to port 3000');
});

