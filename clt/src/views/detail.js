import {useEffect, useState} from 'react'
import {useHistory, useLocation  } from 'react-router-dom'
import axios from 'axios';
import {NavBar}from 'antd-mobile'

const Detail = ()=>{
    const [detail,setDetail] =useState([])
    const location = useLocation();
    const history = useHistory();

    const urlParams = new URLSearchParams(location.search)
    const id = urlParams.get('id');

    useEffect(async ()=>{

        const _detail = await axios.post('http://localhost:2021/api/newsdetail',{
            id
        })

        setDetail(_detail.data.data)

    },[])


    return (
        <>
          <div className='detail'>
            <NavBar back='返回' onBack={()=>{
                history.goBack()
            }} style={{color:'red',fontWeight:'900'}}>
            </NavBar>
            <h1>{detail.title}</h1>
            <h2>{detail.author}</h2>  
            <div className="news_img">
            <img src={'./assets/img/'+detail.url}/>
            </div>
            <p>{detail.content}</p>
          </div>
        </>
    )
}
export default Detail