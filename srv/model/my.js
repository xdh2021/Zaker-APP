// 我的（设置）界面
const mongoose = require('mongoose')

var userSchema = mongoose.Schema({
        video:String,
        title:String,
        author:String
},{
        timestamps: true 
});

var User = mongoose.model('user', userSchema);

module.exports = User;