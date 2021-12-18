// 本地新闻
const mongoose = require('mongoose')

var localnewsSchema = mongoose.Schema({
        title:String,
        author:String,
        content:String
},{
        timestamps: true 
});

var Localnews = mongoose.model('localnews', localnewsSchema);

module.exports = Localnews;