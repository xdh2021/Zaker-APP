import {Tabs,Swiper, } from 'antd-mobile'
import { SearchOutline } from 'antd-mobile-icons'
import {useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import  { useDispatch } from 'react-redux'
import axios from 'axios';

const Location= ()=>{
    const [key,setKey]=useState('localnews')
    const [localnews,setLocalnews] =useState([])
    const [_banner,setBanner] =useState([])

    const history = useHistory();


    useEffect(async ()=>{

        const localnews = await axios.post('http://localhost:2021/api/getAlllocalnews')

        setLocalnews(localnews.data.data)
        
        const _banner = await axios.post('http://localhost:2021/api/getAllbanner')

        setBanner(_banner.data.data)


    },[])
    
    return (
    <div className="hmain">
        <div className="htop">
            <Tabs onChange={key=>setKey(key)} className="htop_tabs">
                <Tabs.Tab title='广州' key='localnews' />
            </Tabs>
            <div className="search">
                <SearchOutline fontSize={16}/>
            </div>
        </div>
        <div className="hcontent">
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
            {key==='localnews' && (
                    <div>
                        <div className="newsList">
                            {localnews.map(item=>(
                                <div className="newsItem" key={item._id} onClick={()=> history.push('/Localdetail?id='+item._id)}>
                                    <h2> {item.title} </h2>
                                    <p> {item.author}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
        </div>
        
    </div>)
}
export default Location