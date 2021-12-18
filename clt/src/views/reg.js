import React, { useState } from 'react'
import {  Form,
    Input,
    Button,
    Toast
    } from 'antd-mobile'
import { useHistory } from 'react-router-dom'
import axios from 'axios'


const Reg=()=>{
    const history = useHistory();
    let account;
    let password;
    return(
        <>
            <div className="login">
                <Form 
                    footer={
                        <Button block type='submit' color='primary' onClick={()=>{
                            {
                                            console.log(account,password);
                                            axios.post('http://localhost:2021/api/addusers', {
                                                     account: account,
                                                     password: password
                                             }).then(function (res) {
                                             console.log(res.data.success);
                                             if(res.data.success){
                                                    console.log('注册成功');
                                                    Toast.show({
                                                    content: '注册成功',
                                                    position: 'bottom',
                                                })
                                
                                                 history.push('./Login')
                                            }else{
                                                console.log('注册失败');
                                                    if(!account||!password){
                                                    Toast.show({
                                                    content: '用户名或密码不能为空',
                                                    position: 'bottom',
                                                })
                                                }else{
                                                Toast.show({
                                                    content: '已存在该用户名',
                                                    position: 'bottom',
                                                    })
                                                }
                                            }
                                            })
                                            .catch(function (error) {
                                                console.log(error);
                                                });
                                            }
                        }}>
                        注册
                        </Button>
                    }>
                    <Form.Item
                        name='姓名'
                        label='姓名'
                        rules={[{ required: true, message: '用户名不能为空' }]}
                    >
                        <Input placeholder='请输入用户名' onChange={value=>{
                            account=value
                        }}/>
                    </Form.Item>
                    <Form.Item name='address' label='密码' rules={[{ required: true, message: '密码不能为空' }]}>
                        <Input placeholder='请输入密码' onChange={value=>{
                            password=value
                        }}/>
                    </Form.Item>
                </Form>
            </div>
        </>
    )
}
export default Reg