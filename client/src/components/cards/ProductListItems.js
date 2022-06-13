import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import './ProductListStyle.css'



const ProductListItems = ({product}) => {
    let uniqueArrayColor = [];
    let uniqueArraySize = [];
    let uniqueArraySizesByColor=[];
    const [uniqueArraySizesByColorState, setUniqueArraySizesByColorState] = useState([]);
    const [uniqueArraySizesByColorState1, setUniqueArraySizesByColorState1] = useState([]);
    const { title, price, category,subs,shipping,brand,quantity,sold,color ,checked,formColors} = product


    useEffect(() => {
        loadFormColorsWithAvailable()
    //     let timer1 = setTimeout(() => loadFormColorsWithAvailable(),  1000);

    //   // this will clear Timeout
    //   // when component unmount like in willComponentUnmount
    //   // and show will not change to true
    //   return () => {
    //     clearTimeout(timer1);
    //   };
    }, [formColors])

    let loadFormColorsWithAvailable=()=>{
        console.log("formColors",formColors);
        // for (let i = 0; i < formColors?.length; i++) {
        //     colorsARR.push({...formColors[i],avalibale:true})
        // }

        let colorsARR=formColors?.map((element,index)=>{
            return {...element,avalibale:true}
        })
        console.log("colorsARR",colorsARR);
        setUniqueArraySizesByColorState1(colorsARR)
    }
    

    //view all colors in the product

    let sortByColor=()=>{
        let uniqueArray = [];
    
    // Loop through array values
        for(let i=0; i < formColors.length; i++){
            if(uniqueArray.indexOf(formColors[i].colorName) === -1) {
                uniqueArray.push(formColors[i].colorName);
                uniqueArrayColor.push({name:formColors[i].colorName,code:formColors[i].colorCode});
            }
        }
        return uniqueArrayColor;
        console.log(uniqueArrayColor);
    }


    //view all sizes in the product
    let sortBySize=()=>{
        let uniqueArray = [];
    // Loop through array values
        console.log(formColors);
        for(let i=0; i < formColors.length; i++){
            if(uniqueArray.indexOf(formColors[i].size) === -1) {
                uniqueArray.push(formColors[i].size);
                uniqueArraySize.push({name:formColors[i].colorName,size:formColors[i].size,quantity:formColors[i].quantity});
            }
        }
        console.log(uniqueArraySize);
        return uniqueArraySize;
    }


    //get the sizes by click on color
    let getSizeByColor=(i,e)=>{
        uniqueArraySizesByColor=[]
        let setUniqueArraySizesByColorStateArr=[...uniqueArraySizesByColorState1]
        console.log('my e',e);
        // let dupChars = uniqueArraySize.filter((element, index) => {
        formColors.filter((element, index) => {
            console.log("color",element);
            // console.log(element);
            console.log();
            if(element.colorName==e.target.value){
                setUniqueArraySizesByColorStateArr[index].avalibale=true;
                // uniqueArraySizesByColor.push({...element,avalibale:true})
                // setUniqueArraySizesByColor([...uniqueArraySizesByColor, {colorName:element.colorName,colorCode:element.colorCode,quantity:element.quantity,size:element.size,avalibale:true}])
                
            }
            else{
                setUniqueArraySizesByColorStateArr[index].avalibale=false;
            }
            // else(
            //     // uniqueArraySizesByColor.push({...element,avalibale:false})
            //     // setUniqueArraySizesByColor([...uniqueArraySizesByColor, {colorName:element.colorName,colorCode:element.colorCode,quantity:element.quantity,size:element.size,avalibale:false}])
            // )
        });
        setUniqueArraySizesByColorState1(setUniqueArraySizesByColorStateArr)
        // setUniqueArraySizesByColorState(uniqueArraySizesByColor)
        // console.log("getSizesByColor",uniqueArraySizesByColor);
        // console.log("getSizesByColorState",uniqueArraySizesByColorState);
    }



    
    return (
        <div>
            <ul className="list-group">
                <li className="list-group-item">
                    Price: <span className="label label-default label-pill pull-xs-right">{price}$</span>
                </li>

            { category&&(<li className="list-group-item">
            Category<Link to={`/category/${category.slug}`} className="label label-default label-pill pull-xs-right">{category.name} </Link>
            </li>)}

            {subs&&(
                <li className="list-group-item">
                Sub Categories {subs.map((s)=>(
                    <Link key={s._id} to={`/sub/${s.slug}`} className="label label-default label-pill pull-xs-right">{s.name}</Link>
                ))}
            </li>
            )}
                
                
                <li className="list-group-item">
                    Shipping<span className="label label-default label-pill pull-xs-right">{shipping}</span>
                </li>

                {/* {
                    sortByColor()
                } */}
                
                {/* {
                    formColors&&(<li className="list-group-item">
                   
                        {
                            sortByColor().map((color,i)=>{
                                console.log(color)
                                
                                // return <button className='color-button' key={i}>{color.colorName}</button>
                                return <button className='color-button' style={{background:`${color.code}`}} key={i}></button>
                            })
                            
                        }
                    </li>)
                } */}

            {
                    formColors&&(<div className="">
                        <div className=''>
                        {
                            sortByColor().map((color,i)=>{
                                console.log(color)
                                
                                // return <button className='color-button' key={i}>{color.colorName}</button>
                                return <button key={i} name={color.name} value={color.name || ""} onClick={e => getSizeByColor(i, e)} className="btn btn-secondary btn-circle btn-circle-xl m-1" style={{background:`${color.code}`}}></button>
                            })
                            
                        }
                        </div>
                    </div>)
                }

                {

formColors&&(<div className="row row-cols-auto">
                   
{
    formColors&&uniqueArraySizesByColorState1&&sortBySize().map((element,i)=>{
        // console.log("uniqueArraySizesByColor",uniqueArraySizesByColor)

        if(element.quantity>0){
            return <div className='col'><button className='btnavalibale'>{element.size.toUpperCase()}</button></div>
        }
        

    //     if(element.quantity>0){
    //         console.log("element.quantity",element.quantity);
    //         if (uniqueArraySizesByColorState.length==0){
    //             return <div className='col'><button className='btnavalibale'>{element.size.toUpperCase()}</button></div>
    //         }
    //         else if(uniqueArraySizesByColor[i].avalibale){
    //             return <div className='col'><button className='btnsizenone'>
    //                 <svg className='buttonsize' height="3.5rem" width="3.5rem">    
    //                     <line x1="0" y1="0" x2="100" y2="100" className='linesvg' />
    //                     <text x="38%" y="58%" fontSize={16} fill="black">{element.size.toUpperCase()}</text>
    //                 </svg></button>
    //             </div>
    //         }
    //         else {
    //             return <div className='col'><button className='btnavalibale'>{element.size.toUpperCase()}</button></div>
    //         }
            
            

            
    //     }
    //     else{
    //         return <div className='col'><button className='btnsizenone'>
    //         <svg className='buttonsize' height="3.5rem" width="3.5rem">    
    //     <line x1="0" y1="0" x2="100" y2="100" className='linesvg' />
    //     <text x="38%" y="58%" fontSize={16} fill="black">{element.size.toUpperCase()}</text>
    //   </svg></button>
    //   </div>
    //     }
        

    
    })
    
}
</div>)

                }
<br/>

                {/* {
                    formColors&&(<div className="row row-cols-auto">
                   
                        {
                            sortBySize().map((element,i)=>{
                                console.log("uniqueArraySizesByColor",uniqueArraySizesByColor)
                                console.log(element.quantity)

                                if(element.quantity>0){
                                    console.log("element.quantity",element.quantity);
                                    if (uniqueArraySizesByColorState.length==0){
                                        return <div className='col'><button className='btnavalibale'>{element.size.toUpperCase()}</button></div>
                                    }
                                    else if(uniqueArraySizesByColor[i].avalibale){
                                        return <div className='col'><button className='btnsizenone'>
                                            <svg className='buttonsize' height="3.5rem" width="3.5rem">    
                                                <line x1="0" y1="0" x2="100" y2="100" className='linesvg' />
                                                <text x="38%" y="58%" fontSize={16} fill="black">{element.size.toUpperCase()}</text>
                                            </svg></button>
                                        </div>
                                    }
                                    else {
                                        return <div className='col'><button className='btnavalibale'>{element.size.toUpperCase()}</button></div>
                                    }
                                    
                                    

                                    
                                }
                                else{
                                    return <div className='col'><button className='btnsizenone'>
                                    <svg className='buttonsize' height="3.5rem" width="3.5rem">    
                                <line x1="0" y1="0" x2="100" y2="100" className='linesvg' />
                                <text x="38%" y="58%" fontSize={16} fill="black">{element.size.toUpperCase()}</text>
                              </svg></button>
                              </div>
                                }
                                

                            //     return element.quantity>0||uniqueArraySizesByColor==[]||?
                            //     <div className='col'><button className='btnavalibale'>{element.size.toUpperCase()}</button></div>:
                            //     <div className='col'><button className='btnsizenone'>
                            //         <svg className='buttonsize' height="3.5rem" width="3.5rem">    
                            //     <line x1="0" y1="0" x2="100" y2="100" className='linesvg' />
                            //     <text x="38%" y="58%" fontSize={16} fill="black">{element.size.toUpperCase()}</text>
                            //   </svg></button>
                            //   </div>
                                
                                // return <button className='color-button' key={i}>{color.colorName}</button>
                            //     return element.quantity<0?
                            //     <div className='col'><button className='btnsizenone'>
                            //         <svg className='buttonsize' height="3.5rem" width="3.5rem">    
                            //     <line x1="0" y1="0" x2="100" y2="100" className='linesvg' />
                            //     <text x="38%" y="58%" fontSize={16} fill="black">{element.size.toUpperCase()}</text>
                            //   </svg></button>
                            //   </div>:
                            //     <div className='col'><button className='btnavalibale'>{element.size.toUpperCase()}</button></div>
                            })
                            
                        }
                    </div>)
                } */}


                <li className="list-group-item">
                    Color<span className="label label-default label-pill pull-xs-right">{color}</span>
                </li>

                <li className="list-group-item">
                    Brand<span className="label label-default label-pill pull-xs-right">{brand}</span>
                </li>

                <li className="list-group-item">
                    Available<span className="label label-default label-pill pull-xs-right">{quantity}</span>
                </li>
                <li className="list-group-item">
                    Sold<span className="label label-default label-pill pull-xs-right">{sold}</span>
                </li>


            </ul>
        </div>
    )
}

export default ProductListItems
