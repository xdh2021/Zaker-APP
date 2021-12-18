import {Tabs,Swiper, } from 'antd-mobile'
import {useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios';

const Find = ()=>{
    const [key,setKey]=useState('recommend')
    const [find,setFind] =useState([])
    const [_banner,setBanner] =useState([])

    useEffect(async ()=>{

        const find = await axios.post('http://localhost:2021/api/getAllfind')

        setFind(find.data.data)


        const _banner = await axios.post('http://localhost:2021/api/getAllbanner')

        setBanner(_banner.data.data)

    },[])
    return (
        <>
            <div className="hmain"  style={{'backgroundColor':'#e3e3e3'}}>
                <div className="htop mytop">
                    <h2>发现</h2>
                </div>
                <div className="hcontent">
                    <div className="findBanner" >
                        <Swiper autoplay loop >
                            {   
                                _banner.map(item=>(
                                <Swiper.Item>
                                    <div className="hbanner">
                                        <img src={'./assets/img/'+item.hb1_img} className="Img1"/>
                                    </div>
                                </Swiper.Item>
                                ))
                            }
                        </Swiper>
                    </div>
                    
                    <div className="findTabs" style={{'backgroundColor':'#fff'}}>
                        <Tabs onChange={key=>setKey(key)} className="htop_tabs">
                            <Tabs.Tab title='新闻' key='news' />
                            <Tabs.Tab title='科技' key='technology' />
                            <Tabs.Tab title='推荐' key='recommend' defaultActiveKey />
                            <Tabs.Tab title='独家' key='sole' />
                            <Tabs.Tab title='娱乐' key='entertainment' />
                        </Tabs>
                    </div>
                    <div className='findbg'>
                        
                        {key==='news' && (
                                <>
                                    <div className="findList">
                                        {find.map(item=>(
                                            <div className="findItem" key={item._id}>
                                                <a href='http://www.baidu.com'>
                                                    <img src={'./assets/img/'+item.img}/>
                                                    <h2> {item.title} </h2>
                                                    <p> {item.content}</p>
                                                </a>
                                            </div>
                                        ))}
                                    </div>
                                </>
                            )}
                        {key==='technology' && (
                                <>
                                    <div className="findList">
                                        {find.map(item=>(
                                            <div className="findItem" key={item._id}>
                                                <a href='http://www.baidu.com'>
                                                    <img src={'./assets/img/'+item.img}/>
                                                    <h2> {item.title} </h2>
                                                    <p> {item.content}</p>
                                                </a>
                                            </div>
                                        ))}
                                    </div>
                                </>
                            )}
                        {key==='recommend' && (
                                <>
                                    <div className="findList">
                                        {find.map(item=>(
                                            <div className="findItem" key={item._id}>
                                                <a href='http://www.baidu.com'>
                                                    <img src={'./assets/img/'+item.img}/>
                                                    <h2> {item.title} </h2>
                                                    <p> {item.content}</p>
                                                </a>
                                            </div>
                                        ))}
                                    </div>
                                </>
                            )}
                        {key==='sole' && (
                                <>
                                    <div className="findList">
                                        {find.map(item=>(
                                            <div className="findItem" key={item._id}>
                                                <a href='http://www.baidu.com'>
                                                    <img src={'./assets/img/'+item.img}/>
                                                    <h2> {item.title} </h2>
                                                    <p> {item.content}</p>
                                                </a>
                                            </div>
                                        ))}
                                    </div>
                                </>
                            )}
                        {key==='entertainment' && (
                                <>
                                    <div className="findList">
                                        {find.map(item=>(
                                            <div className="findItem" key={item._id}>
                                                <a href='http://www.baidu.com'>
                                                    <img src={'./assets/img/'+item.img}/>
                                                    <h2> {item.title} </h2>
                                                    <p> {item.content}</p>
                                                </a>
                                            </div>
                                        ))}
                                    </div>
                                </>
                            )}
                    </div>
                </div>
            </div>  
        </>
    )
}
export default Find