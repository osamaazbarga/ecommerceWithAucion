import React,{useEffect,useState} from 'react'
import AdminNav from '../../components/nav/AdminNav'
import {toast} from 'react-toastify'
import {useSelector} from 'react-redux'
import {getProduct} from '../../function/product'
import ProductCreateForm from '../../components/forms/ProductCreateForm'
import {getCategories,getSubsCategory} from '../../function/category'
import ProductUpdateForm from '../../components/forms/ProductUpdateFrom'

const initialState={
        title:"",
        description:'',
        price:'',
        // categories:[],
        category:'',
        subs:[],
        shipping:'',
        quantity:'',
        images:[],
        colors:["Black","Brown","Silver","White","Blue","Green","Red"],
        color:'',
        brand:'',
    }


const ProductUpdate = ({ match }) => {
    // state
    const [values, setValues] = useState(initialState);
    const [subOptions,setSubOptions]=useState([])
    const [showSub,setShowSub]=useState(false)
    const [categories,setCategories]=useState([])
    const [arrayOfSubs,setArrayOfSubs]=useState([])


    const { user } = useSelector((state) => ({ ...state }));
    // router
    const { slug } = match.params;
  
    useEffect(() => {
      loadProduct();
      loadCategories();
    }, []);
  
    const loadProduct = () => {
      getProduct(slug).then((p) => {
        // console.log("single product", p);
        //1 load single product
        setValues({ ...values, ...p.data });
        //2 load single product category subs
        getSubsCategory(p.data.category._id)
        .then(res=>{
            setSubOptions(res.data)//on first load ,show default subs
        });
        //3 prepare array of sub ids to show as defualt sub values in antd design select
        let arr=[]
        p.data.subs.map(s=>{
            arr.push(s._id)
        })
        console.log('ARR',arr);
        setArrayOfSubs((prev)=>arr)//required for ant design select to work

      });

    };

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

    const loadCategories=()=>{
        getCategories()
        .then(c=>{
            console.log('get cat in update product',c.data);
            // setValues({...values,categories:c.data})
            setCategories(c.data)
        })
    }
  
    const handleSubmit = (e) => {
      e.preventDefault();
      //
    };
  
    const handleChange = (e) => {
      setValues({ ...values, [e.target.name]: e.target.value });
      // console.log(e.target.name, " ----- ", e.target.value);
    };
  
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">
            <AdminNav />
          </div>
  
          <div className="col-md-10">
            <h4>Product update</h4>
            {JSON.stringify(values)}
  
            <ProductUpdateForm
              handleSubmit={handleSubmit}
              handleChange={handleChange}
              setValues={setValues}
              values={values}
              handleCategoryChange={handleCategoryChange}
              subOptions={subOptions}
              showSub={showSub}
              categories={categories}
              arrayOfSubs={arrayOfSubs}
              setArrayOfSubs={setArrayOfSubs}
            />
            <hr />
          </div>
        </div>
      </div>
    );
  };
  
  export default ProductUpdate;
  