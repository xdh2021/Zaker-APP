const express = require('express');

const  router = express.Router();

const Users = require("../model/users")

// 添加用户
router.post('/addusers', async (req,res)=>{
    const { account,password } = req.body;
    
    // 数据过滤
    if(!account||!password) return res.send( {success:false,info:'请填写必要参数'});

    // 添加入库
    try{
        const user = await  Users.findOne({ account });
        if(user)  return res.send({success:false,info:'改用户名已被使用'});

        await Users.create({
            account,
            password
        })
        res.send({success:true,info:'添加成功'})

    } catch(e) {
        res.send( {success:false,info:'未知错误 请于网站管理员联系'});
    }


})

router.post('/Login', async (req,res)=>{

    const { account,password } = req.body;
    console.log(account,password)
    if(!account ) return res.send({success:false,info:'请输入正确的用户名'});
    if(!password ) return res.send({success:false,info:'请输入正确的用户名'});
    
    try {
        const user = await Users.findOne({ account });  
        if(!user)  return res.send({success:false,info:'用户或密码错误'});
    
        // 密码比对
    
        // const _d = user.createdAt;
        // const _t = _d.getTime();
    
        // let finalpassword = utils.md5( `${pwd}${_t}` ) // 对用户密码进行加密
    
    
        if( user.password!=password) return res.send({success:false,info:'用户或密码错误'});
        
        res.send({success:true,info:'登录成功'});
    
        }catch(e){
    
            res.send({success:false,info:'登录失败'})
    
        }
    
    })

module.exports = router;