import {Tabs,Swiper, } from 'antd-mobile'
import {useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import  { useDispatch } from 'react-redux'
import axios from 'axios';

const Videos = ()=>{
    const [key,setKey]=useState('videos')
    const [videos,setVideos] =useState([])
    const history = useHistory();


    useEffect(async ()=>{

        const videos = await axios.post('http://localhost:2021/api/getAllVideo')

        setVideos(videos.data.data)

    },[])
    
    return (
    <div className="hmain">
        <div className="htop">
            <Tabs onChange={key=>setKey(key)} className="htop_tabs">
                <Tabs.Tab title='视频' key='videos' />
                <Tabs.Tab title='直播' key='look' />
            </Tabs>
        </div>
        <div className="hcontent">
            {key==='videos' && (
                    <div>
                        <div className="videosList">
                            {videos.map(item=>(
                                <div className="videosItem" key={item._id} onClick={()=> history.push('/Videos?id='+item._id)}>
                                    <h2> {item.title} </h2>
                                    <p> {item.author}</p>
                                    <video width="100%" height="210" src={'./assets/video/'+item.video} controls="controls">
                                    </video>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            {key==='look' && (
                    <h1>暂无</h1>
                )}
        </div>
        
    </div>)
}
export default Videos