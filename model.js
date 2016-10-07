var mongoose = require('mongoose');
var uri = 'mongodb://username:password@hostname:port/databasename';
//也可以直接
uri = 'mongodb://localhost/cmsdb';

mongoose.connect(uri);


//定义数据结构
var BooksSchema = new mongoose.Schema({
    name:String,
    author:String,
    publishTime:  Date
})

mongoose.model('Book', BooksSchema)