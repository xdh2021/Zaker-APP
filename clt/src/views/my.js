import { SearchOutline ,UnorderedListOutline,
    PayCircleOutline,
    SetOutline,} from 'antd-mobile-icons'
import React from 'react'
import { Button, Space ,List,Toast} from 'antd-mobile'
import {useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios';


const My = ()=>{
    const history = useHistory();
    const data = JSON.parse(localStorage.getItem('userInfo'))
            // 判断是否已登录
             if (data && data.account){
        return(
            <>
            <div className="hmain">
                <div className="htop mytop">
                    <h2>我的</h2>
                </div>
                <div className="account2">
                    <h1>你好,{data.account}</h1>
                </div>
                <div className="login">
                    
                    <Button block color='primary' size='middle' onClick={()=>{
                        localStorage.removeItem('userInfo')
                        history.push('./Login')
                        Toast.show({
                            content: '退出登陆成功',
                            position: 'bottom',
                        })
                        }}>
                        退出登录
                    </Button>   
                </div>
                <div className="mytool">
                    <List className='ls1'>
                        <List.Item prefix={<UnorderedListOutline /> } onClick={() => {}}  className='lst1' >
                            消息中心
                        </List.Item>
                        <List.Item prefix={<PayCircleOutline />} onClick={() => {}} className='lst1'>
                            收藏与历史
                        </List.Item>
                    </List>
                    <List className='ls1'>
                        <List.Item prefix={<SetOutline />} onClick={() => {}} className='lst1'>
                            福利商城
                        </List.Item>
                        <List.Item prefix={<SetOutline />} onClick={() => {}} className='lst1'>
                            活动中心
                        </List.Item>
                        <List.Item prefix={<SetOutline />} onClick={() => {}} className='lst1'>
                            主题皮肤
                        </List.Item>
                    </List>
                    <List className='ls1'>
                        <List.Item prefix={<SetOutline />} onClick={() => {}} className='lst1'>
                            推送资讯
                        </List.Item>
                        <List.Item prefix={<SetOutline />} onClick={() => {}} className='lst1'>
                            设置
                        </List.Item>
                        <List.Item prefix={<SetOutline />} onClick={() => {}} className='lst1'>
                            意见反馈
                        </List.Item>
                    </List>
                </div>
            </div>
        </>
        )
    }else{
        return(
            <>
            <div className="hmain" style={{'backgroundColor':'#e3e3e3'}}>
                <div className="htop mytop">
                    <h2>我的</h2>
                </div>
                <div className="account1">
                    <h1>当前未登录，请点击登录</h1>
                </div>
                <div className="login">
                    <Button block color='primary' size='middle' onClick={()=> history.push('/Login')}>
                        点击登录
                    </Button>   
                </div>
                <div className="mytool">
                    <List className='ls1'>
                        <List.Item prefix={<UnorderedListOutline /> } onClick={() => {}}  className='lst1' >
                            消息中心
                        </List.Item>
                        <List.Item prefix={<PayCircleOutline />} onClick={() => {}} className='lst1'>
                            收藏与历史
                        </List.Item>
                    </List>
                    <List className='ls1'>
                        <List.Item prefix={<SetOutline />} onClick={() => {}} className='lst1'>
                            福利商城
                        </List.Item>
                        <List.Item prefix={<SetOutline />} onClick={() => {}} className='lst1'>
                            活动中心
                        </List.Item>
                        <List.Item prefix={<SetOutline />} onClick={() => {}} className='lst1'>
                            主题皮肤
                        </List.Item>
                    </List>
                    <List className='ls1'>
                        <List.Item prefix={<SetOutline />} onClick={() => {}} className='lst1'>
                            推送资讯
                        </List.Item>
                        <List.Item prefix={<SetOutline />} onClick={() => {}} className='lst1'>
                            设置
                        </List.Item>
                        <List.Item prefix={<SetOutline />} onClick={() => {}} className='lst1'>
                            意见反馈
                        </List.Item>
                    </List>
                </div>
            </div>
        </>
        )
    }
}

export default My