var mongoose = require('mongoose');
var url = 'mongodb://username:password@hostname:port/databasename';
//也可以直接
url = 'mongodb://localhost/cmsdb';

mongoose.connect(url);


//定义数据结构
var BooksSchema = new mongoose.Schema({
    name:String,
    author:String,
    publishTime:  Date
})

mongoose.model('Book', BooksSchema)
