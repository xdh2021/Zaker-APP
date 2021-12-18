// 首页新闻
const mongoose = require('mongoose')

var carSchema = mongoose.Schema({
        img:String,
        title:String,
        author:String,
        content:String
},{
        timestamps: true 
});

var Car = mongoose.model('car', carSchema);

module.exports = Car;

