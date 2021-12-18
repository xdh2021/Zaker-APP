import {useEffect, useState} from 'react'
import { useHistory,useLocation  } from 'react-router-dom'
import {NavBar}from 'antd-mobile'
import  { useDispatch } from 'react-redux'
import axios from 'axios';

const Localdetail = ()=>{
    const [localdetail,setLocaldetail] =useState([])
    const location = useLocation();
    const history = useHistory();

    const urlParams = new URLSearchParams(location.search)
    const id = urlParams.get('id');

    useEffect(async ()=>{

        const _localdetail = await axios.post('http://localhost:2021/api/localnewsdetail',{
            id
        })

        setLocaldetail(_localdetail.data.data)

    },[])


    return (
        <>
           <div className='detail'>
                <NavBar back='返回' onBack={()=>{
                        history.goBack()
                    }} style={{color:'red',fontWeight:'900'}}>
                </NavBar>
                <h1>{localdetail.title}</h1>
                <h2>{localdetail.author}</h2>  
                <p>{localdetail.content}</p>
           </div>
        </>
    )
}
export default Localdetail