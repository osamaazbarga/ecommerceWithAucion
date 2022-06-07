import { Menu, Badge } from 'antd'
// import './Menu.css'
import './Header-nav.css'
import './Search.css'

import { useNavigate,useLocation } from 'react-router-dom';
import React, { useState } from 'react'
import { ShoppingCartOutlined, ShoppingOutlined, HomeOutlined, SettingOutlined, UserOutlined, UserAddOutlined, LogoutOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom'
import firebase from 'firebase';
import { useDispatch, useSelector } from 'react-redux';
// import { useHistory } from 'react-router-dom';
import Search from '../forms/Search';
import '../../styles/styles.css'
import logo from './images/logo.png'

import "bootstrap/dist/css/bootstrap.min.css"; 
import "@popperjs/core"; 
import "bootstrap";

const { SubMenu } = Menu;//menu.submenu







const Header = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const [referenceElement, setReferenceElement] = useState(null);
    const [popperElement, setPopperElement] = useState(null);
    const [arrowElement, setArrowElement] = useState(null);

    const posts = [
        {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
        {id: 2, title: 'Installation', content: 'You can install React from npm.'}
      ];


    const [current, setCurrent] = useState('')
    let dispach = useDispatch()
    let { user, cart } = useSelector((state) => ({ ...state }))
    // let history = useHistory()
    
    const handleClick = (e) => {
        console.log('click ', e);
        console.log('e.key', e.key);
        setCurrent(e.key)
    }

    const logout = () => {
        firebase.auth().signOut()
        dispach({
            type: "LOGOUT",
            payload: null
        });
        navigate('/login')
    }
    return (
        <div className='first-div'>
        {/* <Menu onClick={handleClick} selectedKeys={[current]} warnKey={1}  mode="horizontal">
            <Menu.Item key="home" icon={<HomeOutlined />}>
                <Link to="/">Home</Link>

            </Menu.Item>

            <Menu.Item key="shop" icon={<ShoppingOutlined />}>
                <Link to="/shop">Shop</Link>

            </Menu.Item>

            <Menu.Item key="cart" icon={<ShoppingCartOutlined />}>
                <Link to="/cart">
                    <Badge count={cart.length} offset={[9,1]}>
                        Cart
                    </Badge>
                </Link>
            </Menu.Item>
            {/* <Menu.Item key="login" icon={<UserOutlined />} className="float-right">
                    <Link to="/login" state={{ from: location }}>Login</Link>

                </Menu.Item> */}

            {/* {!user && (
                <Menu.Item key="register" icon={<UserAddOutlined />} className="float-nav">
                    <Link to="/register">Register</Link>
                </Menu.Item>
            )}
            {!user && (
                <Menu.Item key="login" icon={<UserOutlined />} className="float-right">
                    <Link to="/login" state={{ from: location }}>Login</Link>

                </Menu.Item>
            )} */}


            {/* {
                user && (
                    <SubMenu key="SubMenu" icon={<SettingOutlined />} title={user.email&&user.email.split('@')[0]} className="float-right">

                        {user&&user.role==='subscriber'&& <Menu.Item key="subscriber"><Link to="/user/history">Dashboard</Link></Menu.Item>}
                        {user&&user.role==='admin'&& <Menu.Item key="admin"><Link to="/admin/dashboard">Admin Dashboard</Link></Menu.Item>}
                        <Menu.Item key="setting:2">Option 2</Menu.Item>
                        <Menu.Item icon={<LogoutOutlined />} onClick={logout}>Logout</Menu.Item>

                    </SubMenu>
                )
            } */}
            {/* <span className="float-right p-1">
                <Search/>
            </span> */}
        {/* </Menu> */} 

        <header className="p-3">
    <div className="container-fluid">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
       {/* <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
           <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap"/></svg> 
        </a>*/}
        <div className="fone-display">
            <div className='col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none'>
                osama
            </div>
        </div>

        {/* <ul onClick={handleClick} selectedKeys={[current]}  className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
           <li className="nav-item">
               <Link className="nav-link px-2 text-secondary" to="/"><i className="bi bi-house-door"></i> Home</Link></li>
          <li><Link className="nav-link px-2 text-white" to="/shop"><i className="bi bi-handbag"></i> Shop</Link></li>
          {/* <li><a href="#" class="nav-link px-2 text-white">Pricing</a></li>
          <li><a href="#" class="nav-link px-2 text-white">FAQs</a></li>
          <li><a href="#" class="nav-link px-2 text-white">About</a></li>
        </ul> */}

        <ul onClick={handleClick} selectedKeys={[current]}  className="left-nav-css nav col-md-4 mb-2 mb-md-0">
           <li className="nav-item">
               <Link className="nav-link px-2 text-secondary" to="/"><i className="bi bi-house-door"></i> Home</Link></li>
          <li><Link className="nav-link px-2 text-black" to="/shop"><i className="bi bi-handbag"></i> Shop</Link></li>
          {/* <li><a href="#" class="nav-link px-2 text-white">Pricing</a></li>
          <li><a href="#" class="nav-link px-2 text-white">FAQs</a></li>
          <li><a href="#" class="nav-link px-2 text-white">About</a></li> */}
        </ul>

    

        {/* <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
          <input type="search" class="form-control form-control-dark" placeholder="Search..." aria-label="Search"/>
        </form> */}
        

            <div className='desktop-display col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none'>
                osama
                {/* <div className='search-box'>
                    <input type='text' placeholder='Search'/>
                    <a href="##" className='icon'>
                        <i className='fas fa-search'></i>
                    </a>
                </div> */}
            </div>
            {/* <div className='search-box'>
                    <input type='text' placeholder='Search'/>
                    <a href="##" className='icon'>
                        <i className='fas fa-search'></i>
                    </a>
                </div> */}
            

        <div className="nav col-md-4 col-lg-auto text-end mb-md-0 justify-content-center">
        {/* <Link to="/cart">
                    <Badge count={cart.length} offset={[9,1]}>
                        Cart
                    </Badge>
                </Link> */}
          {/* <button type="button" class="btn btn-outline-light me-2">Login</button>
          <button type="button" class="btn btn-warning">Sign-up</button> */}
          <ul onClick={handleClick} selectedKeys={[current]} className='nav'>
              <li className='search-div'><span className="float-right search-span p-1">
                {/* <Search/> */}
            </span></li>
              <li className='link-div'><Link className="nav-link px-4" to="/cart">
              <i className="bi bi-cart"></i> <Badge className='' count={cart.length} offset={[9,1]}>
                        Cart
                    </Badge>
                </Link></li>
              

              {!user&&(
                  <li className='link-div' key="register">
                      <Link className="nav-link px-2" to="/register">
                          <i className="bi bi-person-plus"></i> Register</Link>
                  </li>
              )}

              {!user&&(
                  <li className='link-div' key="login">
                      <Link className="nav-link px-2" to="/login" state={{ from: location }}>
                        <i className="bi bi-person"></i> Login</Link>
                  </li>
              )}
              {
                  user && (
                    <div key="SubMenu" className="dropdown link-div text-end">
                        <a href="#" className="nav-link d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                            {user.email&&user.email.split('@')[0]}<img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle"/>
                        </a>
                        <ul className="dropdown-menu text-small" aria-labelledby="dropdownUser1">
                            {user&&user.role==='subscriber'&& <li key="subscriber">
                                <Link className='nav-link px-2 text-black' to="/user/history">Dashboard</Link></li>
                            }
                            {user&&user.role==='admin'&& <li onClick={handleClick} selectedKeys={[current]}>
                                <Link className='nav-link px-2 text-black' to="/admin/dashboard">Admin Dashboard</Link></li>
                            }
                        
                            {/* <li><a class="dropdown-item" href="#">New project...</a></li>
                            <li><a class="dropdown-item" href="#">Settings</a></li>
                            <li><a class="dropdown-item" href="#">Profile</a></li> */}
                            <li><hr className="dropdown-divider"/></li>
                        {/* <li><a class="dropdown-item" href="#">Sign out</a></li> */}
                        <li className='nav-link px-2 text-black'><a onClick={logout}><i className="bi bi-box-arrow-left"></i> Sign out</a></li>
                        {/* {user&&user.role==='subscriber'&& <Menu.Item key="subscriber"><Link to="/user/history">Dashboard</Link></Menu.Item>}
                        {user&&user.role==='admin'&& <Menu.Item key="admin"><Link to="/admin/dashboard">Admin Dashboard</Link></Menu.Item>}
                        <Menu.Item key="setting:2">Option 2</Menu.Item>
                        <Menu.Item icon={<LogoutOutlined />} onClick={logout}>Logout</Menu.Item> */}
                        </ul>
                  </div>
                  )
              }

{/* {
                user && (
                    <SubMenu key="SubMenu" icon={<SettingOutlined />} title={user.email&&user.email.split('@')[0]} className="float-right">

                        {user&&user.role==='subscriber'&& <Menu.Item key="subscriber"><Link to="/user/history">Dashboard</Link></Menu.Item>}
                        {user&&user.role==='admin'&& <Menu.Item key="admin"><Link to="/admin/dashboard">Admin Dashboard</Link></Menu.Item>}
                        <Menu.Item key="setting:2">Option 2</Menu.Item>
                        <Menu.Item icon={<LogoutOutlined />} onClick={logout}>Logout</Menu.Item>

                    </SubMenu>
                )
            } */}

            
              
          </ul>
        </div>
      </div>
    </div>
  </header>
  <div className='search-div1'>
    <Search/>
  </div>
  <div className='banner-div'></div>
        </div>

    )

}

export default Header
