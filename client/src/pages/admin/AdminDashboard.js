import React,{useEffect,useState} from 'react'
import AdminNav from '../../components/nav/AdminNav'
import { getProductsByCount } from '../../function/product'

const AdminDashboard = () => {
    const [products,setProducts]=useState([])
    const [loading,setLoading]=useState(false)

    useEffect(()=>{
        loadAllProducts()
        
    },[])

    const loadAllProducts=()=>{
        setLoading(true)
        getProductsByCount(5)
        .then((res)=>{

            setProducts(res.data)
            setLoading(false)
        })
        .catch((err)=>{
            setLoading(false)
            console.log(err)
        })
    }
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-2"><AdminNav/></div>
                <div className="col">
                    Admin Dashboard Page
                    {
                        loading?<h4>loading...</h4>:(
                            <div>{JSON.stringify(products)}</div>
                        )
                    }
                    <div>{JSON.stringify(products)}</div>
                </div>
            </div>
        </div>
    )
}

export default AdminDashboard
