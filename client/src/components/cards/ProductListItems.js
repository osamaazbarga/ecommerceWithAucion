import React from 'react'
import { Link } from 'react-router-dom'
import './ProductListStyle.css'



const ProductListItems = ({product}) => {
    let uniqueArrayColor = [];

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
    const { title, price, category,subs,shipping,brand,quantity,sold,color ,checked,formColors} = product
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
                
                {
                    formColors&&(<li className="list-group-item">
                   
                        {
                            sortByColor().map((color,i)=>{
                                console.log(color)
                                
                                // return <button className='color-button' key={i}>{color.colorName}</button>
                                return <button className='color-button' style={{background:`${color.code}`}} key={i}></button>
                            })
                            
                        }
                    </li>)
                }

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
