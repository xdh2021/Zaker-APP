// 首页新闻
const mongoose = require('mongoose')

var newsSchema = mongoose.Schema({
        url:String,
        title:String,
        author:String,
        content:String
},{
        timestamps: true 
});

var News = mongoose.model('news', newsSchema);

module.exports = News;

