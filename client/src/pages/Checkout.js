import React,{useState,useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { getUserCart ,emptyUserCart,saveUserAddress} from '../function/user' 
import {toast} from 'react-toastify'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

const Checkout = () => {
    const dispach=useDispatch()
    const {user}=useSelector((state)=>({...state}))
    const [products,setProducts]=useState([])
    const [total,setTotal]=useState(0)
    const [address,setAddress]=useState("")
    const [addressSaved,setAddressSaved]=useState(false)



    useEffect(()=>{
        getUserCart(user.token)
        .then((res)=>{
            console.log('user cart res',JSON.stringify(res.data,null,4));
            setProducts(res.data.products)
            setTotal(res.data.cartTotal)
        })
    },[])

    const saveAddressToDb=()=>{
        // console.log("");
        saveUserAddress(user.token,address)
        .then((res)=>{
            if(res.data.ok){
                setAddressSaved(true)
                toast.success("Address Saved")
            }
        })
    }

    const emptyCart=()=>{
        //remove from localstorage
        if(typeof(window)!=='undefined'){
            localStorage.removeItem("cart")
        }
        //remove from redux
        dispach({
            type:'ADD_TO_CART',
            payload:[]
        })

        //remove from backend
        emptyUserCart(user.token)
        .then((res)=>{
            setProducts([])
            setTotal(0)
            toast.success("Cart is Empty,contniue shopping")
        })

    }

    return (
        <div className="row">
            <div className="col-md-6">
                <h4>Delivery Address</h4>
                <br/>
                <br/>
                <ReactQuill
                    theme="snow" value={address} onChange={setAddress}/>
                <button onClick={saveAddressToDb} className="btn btn-primary mt-2">Save</button>
                <hr/>
                <h4>Got Coupon?</h4>
                <br/>
                coupon input and apply button
            </div>
            <div className="col-md-6">
                <h4>Order Summary</h4>
                <hr/>
                <p>Products {products.length}</p>
                <hr/>
                <p>List of Products</p>
                {products.map((p,i)=>{
                    return (
                        <div>
                            <p>{p.product.title} x {p.count} = {p.product.price*p.count}</p>
                        </div>
                    )
                })}
                <hr/>
                <p>Cart total: {total}$</p>
                <div className="row">
                    <div className="col-md-6">
                        <button disabled={!addressSaved||!products.length} className="btn btn-primary">Place Order</button>
                    </div>

                    <div className="col-md-6">
                        <button disabled={!products.length} onClick={emptyCart} className="btn btn-primary">Empty Cart</button>
                    </div>

                </div>
            </div>

            
        </div>
    )
}

export default Checkout
