import React,{useEffect,lazy,Suspense,Fragment} from 'react';
// import {Switch,Route}from 'react-router-dom'

import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import { Route } from 'react-router';
import { BrowserRouter , Routes} from 'react-router-dom';
import {auth} from '../../firbase'
import {useDispatch} from 'react-redux'
// import {currentUser} from './function/auth'
import { LoadingOutlined } from '@ant-design/icons';
import Header from '../nav/Header';
// import FooterBar from './components/footer/FooterBar';


// const Login =lazy(()=>import( './pages/auth/Login'));
// const Register =lazy(()=>import( './pages/auth/Register'));
// const Home =lazy(()=>import( './pages/Home'));
// const Header =lazy(()=>import( './components/nav/Header'));
// const RegisterComplete =lazy(()=>import( './pages/auth/RegisterComplete'));
const AdminDashboard =lazy(()=>import( '../../pages/admin/AdminDashboard'));
// const ForgetPassword =lazy(()=>import( './pages/auth/ForgetPassword'));
// const History =lazy(()=>import( './pages/user/History'));
// const UserRoute =lazy(()=>import( './components/Routes/UserRoute'));
// const AdminRoute =lazy(()=>import( './components/Routes/AdminRoute'));
const AdminRoute =lazy(()=>import( '../Routes/AdminRoute'));

// const Password =lazy(()=>import( './pages/user/Password'));
// const Wishlist  =lazy(()=>import( './pages/user/Wishlist'));
const CategoryCreate =lazy(()=>import( '../../pages/admin/category/CategoryCreate'));
const CategoryUpdate =lazy(()=>import( '../../pages/admin/category/CategoryUpdate'));
const SubCreate =lazy(()=>import( '../../pages/admin/subCategory/SubCreate'));
const SubUpdate =lazy(()=>import( '../../pages/admin/subCategory/SubUpdate'));
const ProductCreate =lazy(()=>import( '../../pages/product/ProductCreate'));
const AllProducts =lazy(()=>import( '../../pages/product/AllProducts'));
const ProductUpdate =lazy(()=>import( '../../pages/product/ProductUpdate'));
// const ProductView =lazy(()=>import( './pages/ProductView'));
// const CategoryHome =lazy(()=>import( './pages/category/CategoryHome'));
// const SubHome =lazy(()=>import( './pages/sub/SubHome'));
// const Shop =lazy(()=>import( './pages/Shop'));
// const Cart =lazy(()=>import( './pages/Cart'));
// const SideDrawer =lazy(()=>import( './components/drawer/SideDrawer'));
// const Checkout =lazy(()=>import( './pages/Checkout'));
const CreateCouponPage =lazy(()=>import( '../../pages/admin/coupon/CreateCouponPage'));
// const Payment =lazy(()=>import( './pages/Payment'));

const Admin = () => {
  return (
    <div>
        <Header/>
        {/* <Routes> */}
        <Route exact path="/" element={<AdminRoute/>}>
            <Route exact path="/admin/dashboard" element={<AdminDashboard/>}/>
            <Route exact path="/admin/category" element={<CategoryCreate/>}/>
            <Route exact path="/admin/category/:slug" element={<CategoryUpdate/>}/>
            <Route exact path="/admin/sub" element={<SubCreate/>}/>
            <Route exact path="/admin/sub/:slug" element={<SubUpdate/>}/>
            <Route exact path="/admin/product" element={<ProductCreate/>}/>
            <Route exact path="/admin/products" element={<AllProducts/>}/>
            <Route exact path="/admin/product/:slug" element={<ProductUpdate/>}/>
            <Route exact path="/admin/coupon" element={<CreateCouponPage/>}/>
        </Route>
        {/* </Routes> */}
    </div>
  )
}

export default Admin