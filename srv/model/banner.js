//轮播图图片
const mongoose = require('mongoose')

var bannerSchema = mongoose.Schema({
        hb1_img:String,
        hb2_img:String,
        localb_img:String,
},{
        timestamps: true 
});

var Banner = mongoose.model('banner', bannerSchema);

module.exports = Banner;
