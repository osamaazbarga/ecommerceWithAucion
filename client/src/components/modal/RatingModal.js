import React from 'react'
import {Modal,Button} from "antd"
import {toast} from 'react-toastify'
import {useSelector} from 'react-redux'
import { StarOutlined } from '@ant-design/icons'
import { useState } from 'react'
// import { useHistory,useParams } from 'react-router'
import { useParams } from 'react-router'


import { useNavigate } from 'react-router-dom';

 
const RatingModal = ({children}) => {
    // let history=useHistory()
    let {slug}=useParams()
    const navigate = useNavigate();
    const {user}= useSelector(state => ({...state}))
    const [modalVisable,setModeVisable]=useState(false)
    const handleModal=()=>{
        if(user&&user.token){
            setModeVisable(true)
        }
        else{
            navigate({
                pathname:'/login',
                state:{from:`/product/${slug}`}
            })
        }
    }
    return (
        <div>
            <div onClick={handleModal}>
                <StarOutlined
                    className="text-danger"
                /><br/>
                {user?"Leave rating":"Login to leave rating"}
            </div>
            <Modal
                title="Leave your rating"
                centered
                visible={modalVisable}
                onOk={()=>{
                    setModeVisable(false)
                    toast.success("Thanks for your review,it will apper soon")
                }}
                onCancel={()=>setModeVisable(false)}
            >
                {children}
            </Modal>
        </div>
    )
}

export default RatingModal
