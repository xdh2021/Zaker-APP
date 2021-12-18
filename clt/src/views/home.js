import {Tabs,Swiper, } from 'antd-mobile'
import { SearchOutline,ShopbagOutline} from 'antd-mobile-icons'
import {useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import  { useDispatch } from 'react-redux'
import axios from 'axios';
import carapp from '../assets/img/carapp.png'

const Home = ()=>{
    const [key,setKey]=useState('hot')
    const [news,setNews] =useState([])
    const [banner,setBanner] =useState([])
    const [car,setCar] =useState([])
    const history = useHistory();
        

    useEffect(async ()=>{

        const news = await axios.post('http://localhost:2021/api/getAllNews')

        setNews(news.data.data)

        const banner = await axios.post('http://localhost:2021/api/getAllbanner')
        setBanner(banner.data.data)

        const car = await axios.post('http://localhost:2021/api/getAllcar')

        setCar(car.data.data)
    },[])
    return (
    <div className="hmain">
        <div className="htop">
        <Tabs onChange={key=>setKey(key)} className="htop_tabs">
          <Tabs.Tab title='热点' key='hot' />
          <Tabs.Tab title='订阅' key='dingyue' />
          <Tabs.Tab title='汽车' key='car' />
          <Tabs.Tab title='精读' key='read' />
        </Tabs>
            <div className="search">
            <SearchOutline fontSize={16}/>
            </div>
        </div>
        <div className="hcontent">
            {key==='hot' && (
                <div>
                    <div className="newsList">
                        {news.map(item=>(
                            <div className="newsItem" key={item._id} onClick={()=> history.push('/Detail?id='+item._id)}>
                                <h4> {item.title} </h4>
                                <p> {item.author}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
            {key==='dingyue' && (
                <div>
                    <Swiper autoplay loop >
                        {   
                            banner.map(item=>(
                        <Swiper.Item>
                            <div className="hbanner">
                                <img src={'./assets/img/'+item.hb1_img} className="Img1"/>
                            </div>
                        </Swiper.Item>
                            ))
                        }
                    </Swiper>
                    <div className="allSubs">
                        <div className="sub"  >
                            <ShopbagOutline fontSize={36} className="s1"  onClick={()=>{window.location.href="https://baidu.com"}}/>
                            <p>今日看点</p>
                        </div>
                        <div className="sub">
                            <ShopbagOutline fontSize={36} className="s1" onClick={()=>{window.location.href="https://baidu.com"}}/>
                            <p>今日看点</p>
                        </div>
                        <div className="sub nobor">
                            <ShopbagOutline fontSize={36} className="s1" onClick={()=>{window.location.href="https://baidu.com"}}/>
                            <p>今日看点</p>
                        </div>
                        <div className="sub">
                            <ShopbagOutline fontSize={36} className="s1" onClick={()=>{window.location.href="https://baidu.com"}}/>
                            <p>今日看点</p>
                        </div>
                        <div className="sub">
                            <ShopbagOutline fontSize={36} className="s1" onClick={()=>{window.location.href="https://baidu.com"}}/>
                            <p>今日看点</p>
                        </div>
                        <div className="sub nobor">
                            <ShopbagOutline fontSize={36} className="s1" onClick={()=>{window.location.href="https://baidu.com"}}/>
                            <p>今日看点</p>
                        </div>
                        <div className="sub">
                            <ShopbagOutline fontSize={36} className="s1" onClick={()=>{window.location.href="https://baidu.com"}}/>
                            <p>今日看点</p>
                        </div>
                        <div className="sub">
                            <ShopbagOutline fontSize={36} className="s1" onClick={()=>{window.location.href="https://baidu.com"}}/>
                            <p>今日看点</p>
                        </div>
                        <div className="sub nobor">
                            <ShopbagOutline fontSize={36} className="s1" onClick={()=>{window.location.href="https://baidu.com"}} />
                            <p>今日看点</p>
                        </div>
                        <div className="sub">
                            <ShopbagOutline fontSize={36} className="s1" onClick={()=>{window.location.href="https://baidu.com"}}/>
                            <p>今日看点</p>
                        </div>
                        <div className="sub">
                            <ShopbagOutline fontSize={36} className="s1" onClick={()=>{window.location.href="https://baidu.com"}}/>
                            <p>今日看点</p>
                        </div>
                        <div className="sub nobor">
                            <ShopbagOutline fontSize={36} className="s1" onClick={()=>{window.location.href="https://baidu.com"}}/>
                            <p>今日看点</p>
                        </div>
                    </div>
                </div>
            )}
            {key==='car' && (
                <>
                    <div className='car'>

                        <Swiper autoplay loop >
                            {   
                                banner.map(item=>(
                            <Swiper.Item>
                                <div className="hbanner">
                                    <img src={'./assets/img/'+item.hb2_img} className="Img1"/>
                                </div>
                            </Swiper.Item>
                                ))
                            }
                        </Swiper>
                        <div className='carapp'>
                            <div className='appItem'>
                                <img src={carapp}/>
                                <p>行业快讯</p>
                            </div>
                            <div className='appItem'>
                                <img src={carapp}/>
                                <p>先锋观点</p>
                            </div>
                            <div className='appItem'>
                                <img src={carapp}/>
                                <p>视频说车</p>
                            </div>
                            <div className='appItem'>
                                <img src={carapp}/>
                                <p>车友试驾</p>
                            </div>
                        </div>
                        <div className='carnews'>
                            {
                                car.map(item=>(
                                    <div className='carnewsitem'  key={item._id} onClick={()=> history.push('/Cardetail?id='+item._id)}>
                                        <div className='itemcont'>
                                            <h3>{item.title}</h3>   
                                            <p>{item.author}</p>  
                                        </div>
                                            <div className='itemimg'>
                                            <img src={'./assets/img/'+item.img}/>   
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </>
            )}
            {key==='read' && (
                <>
                    <div className='readlist'>
                        {
                            car.map(item=>(
                                <div className='readitem'  key={item._id} onClick={()=> history.push('/Cardetail?id='+item._id)}>
                                    <div className='itemimg'>
                                        <img src={'./assets/img/'+item.img}/>   
                                    </div>
                                    <div className='itemcont'>
                                        <h3>{item.title}</h3>   
                                        <p>{item.author}</p>  
                                    </div>
                                </div>
                            ))
                            }
                    </div>
                </>
            )}
        </div>
        
    </div>)
}

export default Home