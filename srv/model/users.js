// 用户
const mongoose = require('mongoose')

var usersSchema = mongoose.Schema({
        account: String,  // 用户名
        password: String, // 密码
},{
        timestamps: true 
});

var Users = mongoose.model('users', usersSchema);

module.exports = Users;
