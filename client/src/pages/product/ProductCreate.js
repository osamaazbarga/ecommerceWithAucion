import React,{useEffect,useState} from 'react'
import AdminNav from '../../components/nav/AdminNav'
import {toast} from 'react-toastify'
import {useSelector} from 'react-redux'
import {createProduct} from '../../function/product'
import ProductCreateForm from '../../components/forms/ProductCreateForm'
import {getCategories,getSubsCategory} from '../../function/category'

const initialState=(
    {
        title:'',
        description:'',
        price:'',
        categories:[],
        category:'',
        subs:[],
        shipping:'',
        quantity:'',
        images:[],
        colors:["Black","Brown","Silver","White","Blue","Green","Red"],
        color:'',
        brand:'',
    }
)


const ProductCreate = () => {
    const [values,setValues]=useState(initialState)
    const [subOptions,setSubOptions]=useState([])
    const [showSub,setShowSub]=useState(false)
    const [formColors,setFormColors]=useState([{colorName:"",colorCode:"",quantity:0,size:""}])
    const [checked,setChecked]=useState(false)


    //redux
    const {user}= useSelector(state => ({...state}))


    
    useEffect(() => {
        loadCategories()
    }, [])

    const loadCategories=()=>{
        getCategories()
        .then(c=>setValues({...values,categories:c.data}))
    }
    


    const handleSubmit=(e)=>{
        e.preventDefault()
        // console.log(formColors);
        setValues({...values,checked,formColors})
        console.log({...values,checked,formColors});
        createProduct({...values,checked,formColors},user.token)
        .then(res=>{
            console.log('res',res);
            // window.alert(`"${res.data.title}" is created`)
            window.alert(`"${{values,formColors}}" is created`)
            // window.location.reload()
        })
        .catch(err=>{
            console.log(err);
            // if(err.response.status===400) {
                    
            //     toast.error(err.response.data)
            // }
            toast.error(err.response.data.err)
        })
    }

    const handleChange=(e)=>{
        setValues({...values,[e.target.name]:e.target.value})
        console.log(e.target.name,'-------',e.target.value);
    }

    const handleCategoryChange=(e)=>{
        e.preventDefault()
        console.log('Clicked category',e.target.value);
        setValues({...values,subs:[],category:e.target.value})
        getSubsCategory(e.target.value)
        .then(res=>{
            console.log('subs options on category click',res);
            setSubOptions(res.data)
        })
        setShowSub(true)
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-2"><AdminNav/></div>
                <div className="col-md-10">
                    <h4>Create Product</h4>
                    <hr/>

                    {JSON.stringify(values.images)}
                    <ProductCreateForm 
                        handleSubmit={handleSubmit} 
                        handleChange={handleChange} 
                        setValues={setValues}
                        values={values}
                        handleCategoryChange={handleCategoryChange}
                        subOptions={subOptions}
                        showSub={showSub}
                        formColors={formColors}
                        setFormColors={setFormColors}
                        checked={checked}
                        setChecked={setChecked}
                    />

                    
                   
                </div>
            </div>
        </div>
    )
}

export default ProductCreate
