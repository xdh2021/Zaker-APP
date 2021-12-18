import React, { useState } from 'react'
import {  Form,Input,Button,Toast} from 'antd-mobile'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

const Login=()=>{
    const history = useHistory();
    let account;
    let password;
    return(
        <>
            <div className="login">
                <Form 
                    footer={
                        <Button block type='submit' color='primary' onClick={()=>{
                                axios.post('http://localhost:2021/api/Login', {
                                                    account: account,
                                                    password: password
                            }).then(function (res) {
                            console.log(res.data.success);
                            if(res.data.success){
                                console.log('登录成功');
                                Toast.show({
                                 content: '登陆成功  ',
                                 position: 'bottom',
                                 })
                                 const data = {
                                    account: account,
                                    password: password
                                 }
                                 console.log(data);
                                 let date = new Date();
                                 date.setDate(date.getDate() + 7)
                                 document.cookie = `account=${account};expires=` + date
                                 document.cookie = `password=${password};expires=` + date

                                 // webStorage存储技术
                                 localStorage.setItem('userInfo',JSON.stringify(data));

                                 history.push('/My')
                             }else{
                                    console.log('登陆失败',account,password);
                                    if(!account||!password){
                                        Toast.show({
                                        content: '用户名或密码不能为空',
                                        position: 'bottom',
                                    })
                                 }else{
                                     Toast.show({
                                     content: '用户名或密码错误',
                                     position: 'bottom',
                                 })}
                             }
                             })
                             .catch(function (error) {
                             console.log(error);
                             });
                            }}>
                        登录
                        </Button>
                    }>
                    <Form.Item
                        name='姓名'
                        label='姓名'
                        rules={[{ required: true, message: '用户名不能为空' }]}
                    >
                        <Input placeholder='请输入用户名'  onChange={value=>{
                            account=value
                            console.log(account );
                        }}/>
                    </Form.Item>
                    <Form.Item name='address' label='密码' rules={[{ required: true, message: '密码不能为空' }]}>
                        <Input placeholder='请输入密码'  onChange={value=>{
                            password=value
                            console.log(password);
                        }}/>
                    </Form.Item>
                </Form>
                <p>未注册请点击注册</p>
                <Button block color='primary' size='middle' onClick={()=> history.push('/Reg')}>
                    注册
                </Button>   
            </div>
        </>
    )
}
export default Login