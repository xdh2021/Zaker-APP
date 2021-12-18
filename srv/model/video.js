// 视频页
const mongoose = require('mongoose')

var videoSchema = mongoose.Schema({
        video:String,
        title:String,
        author:String
},{
        timestamps: true 
});

var Video = mongoose.model('video', videoSchema);

module.exports = Video;

