import React,{useState,useEffect} from 'react'
import SingleProduct from '../components/cards/SingleProduct'
import {getProduct} from '../function/product'


const ProductView = ({match}) => {
    const [product,setProduct]=useState({})
    const {slug}=match.params
    useEffect(() => {
        loadSingleProduct();
    }, [slug])
    const loadSingleProduct=()=>{
        getProduct(slug)
        .then((res)=>{
            setProduct(res.data)
        })
    }
    return (
        <div className="container">

            <SingleProduct product={product}/>
            <div className="row">
                <div>Reload Products</div>
            </div>
        </div>
    )
}

export default ProductView
