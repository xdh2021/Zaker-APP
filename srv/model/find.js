// 发现页数据
const mongoose = require('mongoose')

var findSchema = mongoose.Schema({
        img:String,
        title:String,
        content:String,
},{
        timestamps: true 
});

var Find = mongoose.model('find', findSchema);

module.exports = Find;

