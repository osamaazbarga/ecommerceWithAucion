import { Menu, Badge } from 'antd'
// import './Menu.css'
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
        <div>
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

        <header className="p-3 bg-dark text-white">
    <div className="container">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
          {/* <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap"/></svg> */}
        </a>

        <ul onClick={handleClick} selectedKeys={[current]}  className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
           <li className="nav-item"><Link className="nav-link px-2 text-secondary" to="/"><i className="bi bi-house-door"></i> Home</Link></li>
          <li><Link className="nav-link px-2 text-white" to="/shop"><i className="bi bi-handbag"></i> Shop</Link></li>
          {/* <li><a href="#" class="nav-link px-2 text-white">Pricing</a></li>
          <li><a href="#" class="nav-link px-2 text-white">FAQs</a></li>
          <li><a href="#" class="nav-link px-2 text-white">About</a></li> */}
        </ul>

    

        {/* <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
          <input type="search" class="form-control form-control-dark" placeholder="Search..." aria-label="Search"/>
        </form> */}
        <span className="float-right p-1">
                <Search/>
            </span>

        <div className="text-end">
        {/* <Link to="/cart">
                    <Badge count={cart.length} offset={[9,1]}>
                        Cart
                    </Badge>
                </Link> */}
          {/* <button type="button" class="btn btn-outline-light me-2">Login</button>
          <button type="button" class="btn btn-warning">Sign-up</button> */}
          <ul onClick={handleClick} selectedKeys={[current]} className='nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0'>
              <li><Link className="nav-link px-4 text-white" to="/cart">
              <i className="bi bi-cart"></i> <Badge className='text-white' count={cart.length} offset={[9,1]}>
                        Cart
                    </Badge>
                </Link></li>
              

              {!user&&(
                  <li key="register">
                      <Link className="nav-link px-2 text-white" to="/register">
                          <i className="bi bi-person-plus"></i> Register</Link>
                  </li>
              )}

              {!user&&(
                  <li key="login">
                      <Link className="nav-link px-2 text-white" to="/login" state={{ from: location }}>
                        <i className="bi bi-person"></i> Login</Link>
                  </li>
              )}
              {
                  user && (
                    <div key="SubMenu" className="dropdown text-end">
                        <a href="#" className="nav-link d-block link-dark text-decoration-none dropdown-toggle text-white" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
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
        </div>

    )



        //1
        // <header class="header shop">
        //end 1

            {/* <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown button
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </div> */}

            {/* <!-- Topbar --> 2*/}
            // <div class="topbar">
            //     <div class="container">
            //         <div class="row">
            //             <div class="col-lg-4 col-md-12 col-12">
            //                 {/* <!-- Top Left --> */}
            //                 <div class="top-left">
            //                     <ul class="list-main">
            //                         <li><i class="ti-headphone-alt"></i> +060 (800) 801-582</li>
            //                         <li><i class="ti-email"></i> support@shophub.com</li>
            //                     </ul>
            //                 </div>
            //                 {/* <!--/ End Top Left --> */}
            //             </div>
            //             <div class="col-lg-8 col-md-12 col-12">
            //                 {/* <!-- Top Right --> */}
            //                 <div class="right-content">
            //                     <ul class="list-main">
            //                         <li><i class="ti-location-pin"></i> Store location</li>
            //                         <li><i class="ti-alarm-clock"></i> <a href="#">Daily deal</a></li>
            //                         <li><i class="ti-user"></i> <a href="#">My account</a></li>
            //                         <li><i class="ti-power-off"></i><a href="login.html#">Login</a></li>
            //                     </ul>
            //                 </div>
            //                 {/* <!-- End Top Right --> */}
            //             </div>
            //         </div>
            //     </div>
            // </div>

            // <div className="container ">
            //     <div class="d-flex flex-row h-100">
            //         <div className="d-flex justify-content-between w-100">
            //             <div>
            //                 <a href="index.html">
            //                     <img src={logo} alt="logo" />
            //                 </a>
            //             </div>
            //             <div>
            //                 <Search />
            //             </div>
            //             <div className="d-flex justify-content-between">
            //                 <div className="dropdown mr-3">
            //                     <a type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            //                         <img src="https://mdbootstrap.com/img/new/avatars/2.jpg" height="25" width="25" className="rounded-circle" />
            //                     </a>
            //                     <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            //                         <a class="dropdown-item" href="#">Action</a>
            //                         <a class="dropdown-item" href="#">Another action</a>
            //                         <a class="dropdown-item" href="#">Something else here</a>
            //                     </div>
            //                 </div>
            //                 <div className="dropdown">
            //                     <a type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            //                         <img src="https://mdbootstrap.com/img/new/avatars/2.jpg" height="25" width="25" className="rounded-circle" />
            //                     </a>
            //                     <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            //                         <a class="dropdown-item" href="#">Action</a>
            //                         <a class="dropdown-item" href="#">Another action</a>
            //                         <a class="dropdown-item" href="#">Something else here</a>
            //                     </div>
            //                 </div>
            //             </div>


            //         </div>

//end   2


                    {/* <div className="col-lg-2 col-md-2 col-12">
                        <div className="logo">
                            <a href="index.html"><img src={logo} alt="logo" /></a>
                        </div>

                    </div> */}


                    {/* <div class="col-lg-8 col-md-7 col-12">
                        <Search />
                    </div> */}


                    {/* <div class="col-lg-2 col-md-3 col-12">


                        <div class="right-bar"> */}

                    {/* <div class="sinlge-bar"> */}

                    {/* </div> */}

                    {/* <div class="sinlge-bar">
                                <div className="action">
                                    <div className="profile">
                                        <img
                                            src="https://mdbootstrap.com/img/new/avatars/2.jpg"
                                        // className="rounded-circle"
                                        // height="25"
                                        // alt=""
                                        // loading="lazy"
                                        />
                                    </div>

                                    <div className="menu">
                                        <h3>SomeOne<br /></h3>
                                        <ul>
                                            <li><a href="#">Profile</a></li>
                                            <li><a href="#">Profile</a></li>
                                            <li><a href="#">Profile</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div> */}
                    {/* <div className="sinlge-bar">
                                <Menu >{
                                    user && (
                                        <SubMenu key="SubMenu" icon={<SettingOutlined />} title={<img
                                            src="https://mdbootstrap.com/img/new/avatars/2.jpg"
                                            className="rounded-circle"
                                            height="25"
                                            alt=""
                                            loading="lazy"
                                        />}>

                                            {user && user.role === 'subscriber' && <Menu.Item key="subscriber"><Link to="/user/history">Dashboard</Link></Menu.Item>}
                                            {user && user.role === 'admin' && <Menu.Item key="admin"><Link to="/admin/dashboard">Admin Dashboard</Link></Menu.Item>}
                                            <Menu.Item key="setting:2">Option 2</Menu.Item>
                                            <Menu.Item icon={<LogoutOutlined />} onClick={logout}>Logout</Menu.Item>

                                        </SubMenu>
                                    )
                                }
                                </Menu>
                            </div> */}


                    {/* <div class="sinlge-bar">
                                <a href="#"><img
                                    src="https://mdbootstrap.com/img/new/avatars/2.jpg"
                                    className="rounded-circle"
                                    height="25"
                                    alt=""
                                    loading="lazy"
                                /></a>

                                
                                <ul class="dropdown">
                                    <li><a href="shop-grid.html">Shop Grid</a></li>
                                    <li><a href="cart.html">Cart</a></li>
                                    <li><a href="checkout.html">Checkout</a></li>
                                </ul>

                            <a
                                    className="dropdown-toggle d-flex align-items-center hidden-arrow"
                                    href="#"
                                    id="navbarDropdownMenuLink"
                                    role="button"
                                    data-mdb-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <img
                                        src="https://mdbootstrap.com/img/new/avatars/2.jpg"
                                        className="rounded-circle"
                                        height="25"
                                        alt=""
                                        loading="lazy"
                                    />
                                </a>
                                <ul
                                    class="dropdown-menu dropdown-menu-end"
                                    aria-labelledby="navbarDropdownMenuLink"
                                >
                                    <li>
                                        <a class="dropdown-item" href="#">My profile</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#">Settings</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#">Logout</a>
                                    </li>
                                </ul>
                            </div> */}






                    {/* <div class="sinlge-bar shopping">
                                <a href="#" key='cart' onClick={handleClick} class="single-icon">
                                    <Link to="/cart">
                                        Cart <i class="fas fa-shopping-cart"></i> {cart.length > 0 ? <span class="total-count">{cart.length}</span> : <span></span>}
                                    </Link>
                                </a> */}
                    {/* <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
                                    <Menu.Item key="cart" icon={<ShoppingCartOutlined />}>
                                        <Link to="/cart">
                                            <Badge count={cart.length} offset={[9, 1]}>
                                            </Badge>
                                        </Link>
                                    </Menu.Item>
                                </Menu> */}
                    {/* </div>

                        </div> */}

                    {/* <Menu.Item key="cart" icon={<ShoppingCartOutlined />}>
                            <Link to="/cart">
                                <Badge count={cart.length} offset={[9, 1]}>
                                    Cart
                                </Badge>
                            </Link>
                        </Menu.Item>

                        {!user && (
                            <Menu.Item key="register" icon={<UserAddOutlined />} className="float-nav">
                                <Link to="/register">Register</Link>
                            </Menu.Item>
                        )}
                        {!user && (
                            <Menu.Item key="login" icon={<UserOutlined />} className="float-right">
                                <Link to="/login">Login</Link>

                            </Menu.Item>
                        )}


                        {
                            user && (
                                <SubMenu key="SubMenu" icon={<SettingOutlined />} title={user.email && user.email.split('@')[0]} className="float-right">

                                    {user && user.role === 'subscriber' && <Menu.Item key="subscriber"><Link to="/user/history">Dashboard</Link></Menu.Item>}
                                    {user && user.role === 'admin' && <Menu.Item key="admin"><Link to="/admin/dashboard">Admin Dashboard</Link></Menu.Item>}
                                    <Menu.Item key="setting:2">Option 2</Menu.Item>
                                    <Menu.Item icon={<LogoutOutlined />} onClick={logout}>Logout</Menu.Item>

                                </SubMenu>
                            )
                        } */}
                    {/* </div> */}



        //         </div>
        //     </div>
        //     {/* <!-- End Topbar --> */}
        //     <div class="middle-inner">
        //         <div class="container">
        //             <div class="row">
        //                 <div class="col-lg-2 col-md-2 col-12">
        //                     {/* <!-- Logo --> */}
        //                     <div class="logo">
        //                         <a href="index.html"><img src={logo} alt="logo" /></a>
        //                     </div>
        //                     {/* <!--/ End Logo --> */}
        //                     {/* <!-- Search Form --> */}
        //                     <div class="search-top">
        //                         <div class="top-search"><a href="#0"><i class="ti-search"></i></a></div>
        //                         {/* <!-- Search Form --> */}
        //                         <div class="search-top">
        //                             <form class="search-form">
        //                                 <input type="text" placeholder="Search here..." name="search" />
        //                                 <button value="search" type="submit"><i class="ti-search"></i></button>
        //                             </form>
        //                         </div>
        //                         {/* <!--/ End Search Form --> */}
        //                     </div>
        //                     {/* <!--/ End Search Form --> */}
        //                     <div class="mobile-nav"></div>
        //                 </div>
        //                 <div class="col-lg-8 col-md-7 col-12">
        //                     <div class="search-bar-top">
        //                         <div class="search-bar">
        //                             <select>
        //                                 <option selected="selected">All Category</option>
        //                                 <option>watch</option>
        //                                 <option>mobile</option>
        //                                 <option>kid’s item</option>
        //                             </select>
        //                             <form>
        //                                 <input name="search" placeholder="Search Products Here....." type="search" />
        //                                 <button class="btnn"><i class="ti-search"></i></button>
        //                             </form>
        //                         </div>
        //                     </div>
        //                 </div>

        //                 <div class="col-lg-2 col-md-3 col-12">
        //                     <div class="right-bar">
        //                         {/* <!-- Search Form --> */}
        //                         <div class="sinlge-bar">
        //                             <a href="#" class="single-icon"><i class="fa fa-heart-o" aria-hidden="true"></i></a>
        //                         </div>
        //                         <div class="sinlge-bar">
        //                             <a href="#" class="single-icon"><i class="fa fa-user-circle-o" aria-hidden="true"></i></a>
        //                         </div>
        //                         <div class="sinlge-bar shopping">
        //                             <a href="#" class="single-icon"><i class="ti-bag"></i> <span class="total-count">2</span></a>
        //                             {/* <!-- Shopping Item --> */}
        //                             <div class="shopping-item">
        //                                 <div class="dropdown-cart-header">
        //                                     <span>2 Items</span>
        //                                     <a href="#">View Cart</a>
        //                                 </div>
        //                                 <ul class="shopping-list">
        //                                     <li>
        //                                         <a href="#" class="remove" title="Remove this item"><i class="fa fa-remove"></i></a>
        //                                         <a class="cart-img" href="#"><img src="https://via.placeholder.com/70x70" alt="#" /></a>
        //                                         <h4><a href="#">Woman Ring</a></h4>
        //                                         <p class="quantity">1x - <span class="amount">$99.00</span></p>
        //                                     </li>
        //                                     <li>
        //                                         <a href="#" class="remove" title="Remove this item"><i class="fa fa-remove"></i></a>
        //                                         <a class="cart-img" href="#"><img src="https://via.placeholder.com/70x70" alt="#" /></a>
        //                                         <h4><a href="#">Woman Necklace</a></h4>
        //                                         <p class="quantity">1x - <span class="amount">$35.00</span></p>
        //                                     </li>
        //                                 </ul>
        //                                 <div class="bottom">
        //                                     <div class="total">
        //                                         <span>Total</span>
        //                                         <span class="total-amount">$134.00</span>
        //                                     </div>
        //                                     <a href="checkout.html" class="btn animate">Checkout</a>
        //                                 </div>
        //                             </div>
        //                             {/* <!--/ End Shopping Item --> */}
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>

        //     {/* <!-- Header Inner --> */}
        //     <div class="header-inner">
        //         <div class="container">
        //             <div class="cat-nav-head">
        //                 <div class="row">
        //                     <div class="col-lg-3">
        //                         <div class="all-category">
        //                             <h3 class="cat-heading"><i class="fa fa-bars" aria-hidden="true"></i>CATEGORIES</h3>
        //                             <ul class="main-category">
        //                                 <li><a href="#">New Arrivals <i class="fa fa-angle-right" aria-hidden="true"></i></a>
        //                                     <ul class="sub-category">
        //                                         <li><a href="#">accessories</a></li>
        //                                         <li><a href="#">best selling</a></li>
        //                                         <li><a href="#">top 100 offer</a></li>
        //                                         <li><a href="#">sunglass</a></li>
        //                                         <li><a href="#">watch</a></li>
        //                                         <li><a href="#">man’s product</a></li>
        //                                         <li><a href="#">ladies</a></li>
        //                                         <li><a href="#">westrn dress</a></li>
        //                                         <li><a href="#">denim </a></li>
        //                                     </ul>
        //                                 </li>
        //                                 <li class="main-mega"><a href="#">best selling <i class="fa fa-angle-right" aria-hidden="true"></i></a>
        //                                     <ul class="mega-menu">
        //                                         <li class="single-menu">
        //                                             <a href="#" class="title-link">Shop Kid's</a>
        //                                             <div class="image">
        //                                                 <img src="https://via.placeholder.com/225x155" alt="#" />
        //                                             </div>
        //                                             <div class="inner-link">
        //                                                 <a href="#">Kids Toys</a>
        //                                                 <a href="#">Kids Travel Car</a>
        //                                                 <a href="#">Kids Color Shape</a>
        //                                                 <a href="#">Kids Tent</a>
        //                                             </div>
        //                                         </li>
        //                                         <li class="single-menu">
        //                                             <a href="#" class="title-link">Shop Men's</a>
        //                                             <div class="image">
        //                                                 <img src="https://via.placeholder.com/225x155" alt="#" />
        //                                             </div>
        //                                             <div class="inner-link">
        //                                                 <a href="#">Watch</a>
        //                                                 <a href="#">T-shirt</a>
        //                                                 <a href="#">Hoodies</a>
        //                                                 <a href="#">Formal Pant</a>
        //                                             </div>
        //                                         </li>
        //                                         <li class="single-menu">
        //                                             <a href="#" class="title-link">Shop Women's</a>
        //                                             <div class="image">
        //                                                 <img src="https://via.placeholder.com/225x155" alt="#" />
        //                                             </div>
        //                                             <div class="inner-link">
        //                                                 <a href="#">Ladies Shirt</a>
        //                                                 <a href="#">Ladies Frog</a>
        //                                                 <a href="#">Ladies Sun Glass</a>
        //                                                 <a href="#">Ladies Watch</a>
        //                                             </div>
        //                                         </li>
        //                                     </ul>
        //                                 </li>
        //                                 <li><a href="#">accessories</a></li>
        //                                 <li><a href="#">top 100 offer</a></li>
        //                                 <li><a href="#">sunglass</a></li>
        //                                 <li><a href="#">watch</a></li>
        //                                 <li><a href="#">man’s product</a></li>
        //                                 <li><a href="#">ladies</a></li>
        //                                 <li><a href="#">westrn dress</a></li>
        //                                 <li><a href="#">denim </a></li>
        //                             </ul>
        //                         </div>
        //                     </div>
        //                     <div class="col-lg-9 col-12">
        //                         <div class="menu-area">
        //                             {/* <!-- Main Menu --> */}
        //                             <nav class="navbar navbar-expand-lg">
        //                                 <div class="navbar-collapse">
        //                                     <div class="nav-inner">
        //                                         <ul class="nav main-menu menu navbar-nav">
        //                                             <li class="active"><a href="#">Home</a></li>
        //                                             <li><a href="#">Product</a></li>
        //                                             <li><a href="#">Service</a></li>
        //                                             <li><a href="#">Shop<i class="ti-angle-down"></i><span class="new">New</span></a>
        //                                                 <ul class="dropdown">
        //                                                     <li><a href="shop-grid.html">Shop Grid</a></li>
        //                                                     <li><a href="cart.html">Cart</a></li>
        //                                                     <li><a href="checkout.html">Checkout</a></li>
        //                                                 </ul>
        //                                             </li>
        //                                             <li><a href="#">Pages</a></li>
        //                                             <li><a href="#">Blog<i class="ti-angle-down"></i></a>
        //                                                 <ul class="dropdown">
        //                                                     <li><a href="blog-single-sidebar.html">Blog Single Sidebar</a></li>
        //                                                 </ul>
        //                                             </li>
        //                                             <li><a href="contact.html">Contact Us</a></li>
        //                                         </ul>
        //                                     </div>
        //                                 </div>
        //                             </nav>
        //                             {/* <!--/ End Main Menu -->	 */}
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        //     {/* <!--/ End Header Inner --> */}

        // </header>

    // )
}

export default Header
