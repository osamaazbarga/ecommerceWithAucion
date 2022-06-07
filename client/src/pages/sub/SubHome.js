import React ,{useState,useEffect}from 'react'
import {getSub} from '../../function/subCategory'
import {Link} from 'react-router-dom'
import ProductCard from '../../components/cards/ProductCard'
import { useParams } from 'react-router-dom';
const SubHome = () => {
    const [sub,setSub]=useState({})
    const [products,setProducts]=useState([])
    const [loading,setLoading]=useState(false)

    const params = useParams();
    const {slug}=params

    useEffect(() => {
        setLoading(true)
        getSub(slug).then((res)=>{
            console.log(JSON.stringify(res.data,null,4));
            setSub(res.data.subCategory)
            setProducts(res.data.products)
            setLoading(false)
        })
    }, [])


    return (
        <div className="container">
            
            <div className="row">
                <div className="col">
                    {loading?(
                        <h4 className="text-center p-3 mt-5 mb-5 display-4 jumbotron">Loading...</h4>
                    ):(
                        <h4 className="text-center p-3 mt-5 mb-5 display-4 jumbotron">{products.length} Products in "{sub.name}" Sub Category</h4>

                    )}
                </div>
            </div>

            <div className="row">
                {products.map((p)=>{
                    return (
                        <div key={p._id} className="col-md-4">
                            <ProductCard product={p}/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default SubHome
