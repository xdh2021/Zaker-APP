const express = require('express');
const  router = express.Router();
const News = require("../model/news")
const Video = require("../model/video")
const Find = require("../model/find")
const Localnews = require("../model/localnews")
const Banner = require("../model/banner")
const Car = require("../model/car")

// 添加资讯
router.post('/addnews', async (req,res)=>{
    const { url,title,author,content} = req.body;
    // 数据过滤
    if(!url||!title||!author||!content) return res.send( {success:false,info:'请填写必要参数'});

    // 添加入库
    try{
        await News.create({
            url,title,author,content
        })
        res.send({success:true,info:'添加成功'})
        
    } catch(e) {
        res.send( {success:false,info:'未知错误 请于网站管理员联系'});
    }

})

// 获取全部资讯

router.post('/getAllNews', async (req,res)=>{
      try {
        let news = await News.find() // 分页查询
        res.send({success:true,info:'查询成功',data:news});
      }catch(e){
          console.log(e)
        res.send({success:false,info:'获取失败'})
      }

})


// 获取单个资讯信息

router.post('/newsdetail',async (req,res)=>{

    const { id } = req.body;
    if(!id)  res.send({success:false,info:'请一定要传入id'})

    try {
        let news = await News.findById(id) // 分页查询
      
        res.send({success:true,info:'查询成功',data:news});
      }catch(e){
         
        res.send({success:false,info:'获取失败'})
      }

})


// 添加视频
router.post('/addvideo', async (req,res)=>{
    const { video,title,author  } = req.body;
    // 数据过滤
    if(!video||!title||!author) return res.send( {success:false,info:'请填写必要参数'});

    // 添加入库
    try{
      
        await Video.create({
          video,title,author 
        })
        res.send({success:true,info:'添加成功'})
        
    } catch(e) {
        res.send( {success:false,info:'未知错误 请于网站管理员联系'});
    }

})

//  查询多个视频

router.post('/getAllVideo', async (req,res)=>{
      try {
        let video = await Video.find() // 分页查询
        res.send({success:true,info:'查询成功',data:video});
      }catch(e){
          console.log(e)
        res.send({success:false,info:'获取失败'})
      }

})



//  获取单个视频信息

router.post('/videodetail',async (req,res)=>{

    const { id } = req.body;
    if(!id)  res.send({success:false,info:'请一定要传入id'})

    try {
        let video = await Video.findById(id) // 分页查询
      
        res.send({success:true,info:'查询成功',data:video });
      }catch(e){
         
        res.send({success:false,info:'获取失败'})
      }

})


// 添加当地新闻
router.post('/addlocalnews', async (req,res)=>{
  const { title,author,content} = req.body;
  // 数据过滤
  if(!title||!author||!content) return res.send( {success:false,info:'请填写必要参数'});

  // 添加入库
  try{
      await Localnews.create({
        title,author,content
      })
      res.send({success:true,info:'添加成功'})
      
  } catch(e) {
      res.send( {success:false,info:'未知错误 请于网站管理员联系'});
  }

})

// 获取全部当地新闻

router.post('/getAlllocalnews', async (req,res)=>{
    try {
      let localnews = await Localnews.find() // 分页查询
      res.send({success:true,info:'查询成功',data:localnews});
    }catch(e){
        console.log(e)
      res.send({success:false,info:'获取失败'})
    }

})



// 获取单个当地新闻

router.post('/localnewsdetail',async (req,res)=>{

  const { id } = req.body;
  if(!id)  res.send({success:false,info:'请一定要传入id'})

  try {
      let localnews = await Localnews.findById(id) // 分页查询
    
      res.send({success:true,info:'查询成功',data:localnews});
    }catch(e){
       
      res.send({success:false,info:'获取失败'})
    }

})



// 添加发现页推荐软件
router.post('/addfind', async (req,res)=>{
  const { img,title,content} = req.body;
  // 数据过滤
  if(!img||!title||!content) return res.send( {success:false,info:'请填写必要参数'});

  // 添加入库
  try{
      await Find.create({
        img,title,content
      })
      res.send({success:true,info:'添加成功'})
      
  } catch(e) {
      res.send( {success:false,info:'未知错误 请于网站管理员联系'});
  }

})

// 获取发现页全部推荐软件

router.post('/getAllfind', async (req,res)=>{
    try {
      let find = await Find.find() // 分页查询
      res.send({success:true,info:'查询成功',data:find});
    }catch(e){
        console.log(e)
      res.send({success:false,info:'获取失败'})
    }

})



// 获取单个发现页推荐软件

router.post('/finddetail',async (req,res)=>{

  const { id } = req.body;
  if(!id)  res.send({success:false,info:'请一定要传入id'})

  try {
      let find = await Find.findById(id) // 分页查询
    
      res.send({success:true,info:'查询成功',data:find});
    }catch(e){
       
      res.send({success:false,info:'获取失败'})
    }

})

// 添加轮播图图片
router.post('/addbanner', async (req,res)=>{
  const { hb1_img,hb2_img,localb_img } = req.body;
  // 数据过滤
  if(!hb1_img||!hb2_img||!localb_img) return res.send( {success:false,info:'请填写必要参数'});

  // 添加入库
  try{
      await Banner.create({
        hb1_img,hb2_img,localb_img
      })
      res.send({success:true,info:'添加成功'})
      
  } catch(e) {
      res.send( {success:false,info:'未知错误 请于网站管理员联系'});
  }

})

// 获取全部轮播图图片

router.post('/getAllbanner', async (req,res)=>{
    try {
      let banner = await Banner.find() // 分页查询
      res.send({success:true,info:'查询成功',data:banner});
    }catch(e){
        console.log(e)
      res.send({success:false,info:'获取失败'})
    }

})


// 添加汽车资讯
router.post('/addcar', async (req,res)=>{
  const { img,title,author,content} = req.body;
  // 数据过滤
  if(!img||!title||!author||!content) return res.send( {success:false,info:'请填写必要参数'});

  // 添加入库
  try{
      await Car.create({
        img,title,author,content
      })
      res.send({success:true,info:'添加成功'})
      
  } catch(e) {
      res.send( {success:false,info:'未知错误 请于网站管理员联系'});
  }

})

// 获取全部汽车资讯

router.post('/getAllcar', async (req,res)=>{
    try {
      let car = await Car.find() // 分页查询
      res.send({success:true,info:'查询成功',data:car});
    }catch(e){
        console.log(e)
      res.send({success:false,info:'获取失败'})
    }

})



// 获取单个汽车资讯

router.post('/cardetail',async (req,res)=>{

  const { id } = req.body;
  if(!id)  res.send({success:false,info:'请一定要传入id'})

  try {
      let car = await Car.findById(id) // 分页查询
    
      res.send({success:true,info:'查询成功',data:car});
    }catch(e){
       
      res.send({success:false,info:'获取失败'})
    }

})

module.exports = router;