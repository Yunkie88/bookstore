var express = require('express');
var router = express.Router();


router.get('/', function(req, res) {
res.json({ message: 'Hooray! Welcome to our bookstore!' });
});

module.exports = router;

var Book = require('./book.js');
var routerbook = router.route('/book');

routerbook.post(function(req, res) {
var book = new Book();
book.title = req.body.title;
book.author = req.body.author;
book.year = req.body.year;
book.pages = req.body.pages;
book.save(function(err) {
if (err)
res.send(err);
res.json({ message: 'Book created!' });
});
});

routerbook.get(function(req, res) {
Book.find(function(err, books) {
if (err)
res.send(err);
res.json(books);
});
});

routerbook.get(function(req, res) {
Book.findById(req.params.id, function(err, book) {
if (err)
res.send(err);
res.json(book);
});
});

routerbook.put(function(req, res) {
Book.findById(req.params.id, function(err, book) {
if (err)
res.send(err);
book.title = req.body.title;
book.author = req.body.author;
book.year = req.body.year;
book.pages = req.body.pages;
// save the book
book.save(function(err) {
if (err)
res.send(err);
res.json({ message: 'Book updated!' });
});
});
});

routerbook.delete(function(req, res) {
Book.remove({
_id: req.params.id
}, function(err, book) {
if (err)
res.send(err);
res.json({ message: 'Successfully deleted' });
});
});