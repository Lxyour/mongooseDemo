var mongoose = require('mongoose');
require('./model.js');

var Book = mongoose.model('Book');


var cond = {
	$or: [
		{'author': 'Jim'},
		{'author': 'Tom'}
	]
}

Book.find(cond, function (err, docs) {
    if(err) {
        console.log('find by cond err:', err);
        return;
    }
    console.log('cond result:', cond, 'find result:', docs)
})