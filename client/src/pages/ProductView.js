import React,{useState,useEffect} from 'react'
import SingleProduct from '../components/cards/SingleProduct'
import {getProduct,productStar} from '../function/product'
import { useSelector } from 'react-redux'


const ProductView = ({match}) => {
    const [product,setProduct]=useState({})
    const [star,setStar]=useState(0)
    //redux user
    const {user}=useSelector((state)=>({...state}))

    const {slug}=match.params
    useEffect(() => {
        loadSingleProduct();
    }, [slug])

    useEffect(() => {
        if(product.ratings&&user){
            let existingRatingObject = product.ratings
            let lastRating=existingRatingObject[existingRatingObject.length-1];
            setStar(lastRating.star)
            let existingRatingObject1 = product.ratings.find((ele) =>
                (ele.postedBy.toString() === user._id.toString())
            )
            console.log("existingRatingObject1",existingRatingObject1);
            // existingRatingObject&&setStar(existingRatingObject.star)//corrent user stars
        }
    })
    const loadSingleProduct=()=>{
        getProduct(slug)
        .then((res)=>{
            setProduct(res.data)
        })
    }

    const onStarClick=(newRating,name)=>{
        setStar(newRating)
        console.table(newRating,name,star)
        productStar(name,newRating,user.token)
        .then((res)=>{
            console.log("rating clicked",res.data);
            loadSingleProduct();//if you want to show updated rating in real time
        })
    }
    return (
        <div className="container">

            <SingleProduct product={product} onStarClick={onStarClick} star={star}/>
            <div className="row">
                <div className="col text-center pt-5 pb-5"><hr/><h4>Reload Products</h4><hr/></div>
            </div>
        </div>
    )
}

export default ProductView
