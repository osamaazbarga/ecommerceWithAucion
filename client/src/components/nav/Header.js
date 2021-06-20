import { Menu } from 'antd'
import './Header.css'
import React, { useState } from 'react'
import { HomeOutlined, SettingOutlined ,UserOutlined,UserAddOutlined, LogoutOutlined} from '@ant-design/icons';
import {Link} from 'react-router-dom'
import firebase from 'firebase';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';


const { SubMenu } = Menu;//menu.submenu




const Header = () => {
    const [current, setCurrent] = useState('')
    let dispach=useDispatch()
    let history =useHistory()
    const handleClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key)
    }

    const logout=()=>{
        firebase.auth().signOut()
        dispach({
            type:"LOGOUT",
            payload:null
        });
        history.push('/login')
    }
    return (
            <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
                <Menu.Item key="home" icon={<HomeOutlined />}>
                    <Link to="/">Home</Link>
                </Menu.Item>
                <Menu.Item key="register" icon={<UserAddOutlined />} className="float-nav">
                    <Link to="/register">Register</Link>
                </Menu.Item>
                <Menu.Item key="login" icon={<UserOutlined />} className="float-right">
                    <Link to="/login">Login</Link>

                </Menu.Item>


                <SubMenu key="SubMenu" icon={<SettingOutlined />} title="Username" className="float-right">
                        <Menu.Item key="setting:1">Option 1</Menu.Item>
                        <Menu.Item key="setting:2">Option 2</Menu.Item>
                        <Menu.Item icon={<LogoutOutlined/>} onClick={logout}>Logout</Menu.Item>

                </SubMenu>
            </Menu>
        
    )
}

export default Header
