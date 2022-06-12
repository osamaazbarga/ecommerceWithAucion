import React,{useEffect,lazy,Suspense,Fragment} from 'react';
// import {Switch,Route}from 'react-router-dom'

import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


import { Route } from 'react-router';
import { BrowserRouter , Routes} from 'react-router-dom';
import {auth} from './firbase'
import {useDispatch} from 'react-redux'
import {currentUser} from './function/auth'
import { LoadingOutlined } from '@ant-design/icons';


const Admintest =lazy(()=>import( './pages/admin/Admintest'));

const Admin = () => {
  return (
    <div>
        <Fragment>
            <Suspense fallback={
        <div className="col text-center p-5">
            ___ <LoadingOutlined/> ___
        </div>
        }>
            <ToastContainer/>
            <Routes>
                <Route exact path="/osama/test" element={<Admintest/>}/>
            </Routes>
        </Suspense>
        </Fragment>
    </div>
  )
}

export default Admin