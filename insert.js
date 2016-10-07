var mongoose = require('mongoose');
require('./model.js');

var Book = mongoose.model('Book');

var book = new Book({
    name: 'JavaScript入门指南',
    author: 'Jeckson',
    publishTime: new Date()
})

book.author = 'Jim';

book.save(function (err){
    console.log('Save status:', err ? 'failed' : 'success');
});