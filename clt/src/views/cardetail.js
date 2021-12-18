import {useEffect, useState} from 'react'
import { useHistory,useLocation  } from 'react-router-dom'
import {NavBar}from 'antd-mobile'
import axios from 'axios';

const Cardetail = ()=>{
    const [cardetail,setCardetail] =useState([])
    const location = useLocation();
    const history = useHistory();

    const urlParams = new URLSearchParams(location.search)
    const id = urlParams.get('id');

    useEffect(async ()=>{

        const cardetail = await axios.post('http://localhost:2021/api/cardetail',{
            id
        })

        setCardetail(cardetail.data.data)

    },[])


    return (
        <>
            <div className='detail'>
                <NavBar back='返回' onBack={()=>{
                    history.goBack()
                }} style={{color:'red',fontWeight:'900'}}>
                </NavBar>
                <h1>{cardetail.title}</h1>
                <h2>{cardetail.author}</h2>  
                <div className="news_img">
                <img src={'./assets/img/'+cardetail.img}/>
                </div>
                <p>{cardetail.content}</p>
            </div>
        </>
    )
}
export default Cardetail