import React,{useEffect,useState} from 'react'
// import { useHistory } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';


const LoadingToRedirect = () => {
    const navigate = useNavigate();
    const [count,setCount]=useState(5)
    // let history=useHistory()
    useEffect(()=>{
        const interval=setInterval(() => {
            setCount(count-1)
            
        },1000);
        //redirtct once count is equal to 0
        count===0&&navigate.push('/')
        //cleanup
        return ()=>clearInterval(interval)
    },[count,navigate])
    return (
        <div className="container p-5 text-center">
            <p>Redirecting you in {count} seconds</p>
        </div>
    )
}

export default LoadingToRedirect
