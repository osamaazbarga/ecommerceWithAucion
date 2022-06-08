import React,{useState} from 'react'
import "bootstrap/dist/css/bootstrap.min.css"; 
import "@popperjs/core"; 
import "bootstrap";

import FileUpload from './FileUpload'
import {LoadingOutlined} from '@ant-design/icons'
import { Select } from 'antd'
import "../forms/CategoryForm"
const { Option } = Select


const ProductCreateForm = ({ handleSubmit, handleChange, values, handleCategoryChange, subOptions, showSub, setValues ,formColors,setFormColors,checked,setChecked}) => {
    //destructure
    // const [formColors,setFormColors]=useState([{colorName:"",colorCode:"",quantity:0,size:""}])
    const [loading,setLoading]=useState(false)

    const {
        title,
        description,
        price,
        category,
        categories,
        subs,
        quantity,
        images,
        colors,
        color,
        brand,
        shipping,
    } = values

    let handleChangeColor = (i, e) => {
        let newFormColors = [...formColors];
        newFormColors[i][e.target.name] = e.target.value;
        setFormColors(newFormColors);
        let sum = 0;

        formColors.forEach(element => {
            sum += Number(element.quantity);
        });

        console.log(sum);
        setValues({ ...values, quantity: sum })
     }
        
    let addFormFields = () => {
        setFormColors([...formColors, {colorName:"",colorCode:"",quantity:null,size:""}])
     }
    
    let removeFormFields = (i) => {
        let newFormColors = [...formColors];
        newFormColors.splice(i, 1);
        setFormColors(newFormColors)
    }

    let handleSubmitColor = (event) => {
        event.preventDefault();
        alert(JSON.stringify(formColors));
    }

    let viewColorFields=()=>{

        if (checked == true){
            // text.style.display = "block";
            setChecked(false)
          } else {
            setChecked(true)

          }
    }

    let summaryQuantity=()=>{
        let sum = 0;

        formColors.forEach(element => {
            sum += Number(element.quantity);
        });

        console.log(sum);
        setValues({ ...values, quantity: sum })
    }

    let handlePrint=()=>{
        summaryQuantity()
        console.log(quantity);
    }


    

   
    return (
        <form onSubmit={handleSubmit}>
            

            <div className="form-group">
                <label>Title</label>
                <input
                    type="text"
                    name="title"
                    className="form-control"
                    value={title}
                    onChange={handleChange} />
            </div>

            <div className="form-group">
                <label>Description</label>
                <input
                    type="text"
                    name="description"
                    className="form-control"
                    value={description}
                    onChange={handleChange} />
            </div>

            <div className="form-group">
                <label>Price</label>
                <input
                    type="number"
                    name="price"
                    className="form-control"
                    value={price}
                    onChange={handleChange} />
            </div>

            <div className="form-group">
                <label>Shipping</label>
                <select name="shipping" className="form-control" onChange={handleChange}>
                    <option value="No">No</option>
                    <option value="Yes">Yes</option>
                </select>
            </div>

            
            
             
            {/* <form className="App" autoComplete="off">
            <div className="form-field">
          {formColors.map((element, index) => (
            <div className='form-inline' key={index}>
              <label htmlFor='colorName'>Color Name</label>
              <input name='colorName' id='colorName' type="text" className="form-control"  value={element.colorName} onChange={e => handleChangeColor(index, e)} />
              <label htmlFor='colorCode'>Color Code</label>
              <input type="text" id='colorCode' className="form-control" name="colorCode" value={element.colorCode || ""} onChange={e => handleChangeColor(index, e)} />
              <label htmlFor='quantity'>Color Quality</label>
              <input type="number" id='quantity' className="form-control" name="quantity" value={element.quantity || ""} onChange={e => handleChangeColor(index, e)} />
              <label htmlFor='size'>Quality Size</label>
              <input type="text" id='size' className="form-control" name="size" value={element.size || ""} onChange={e => handleChangeColor(index, e)} />
              {
                index ? 
                  <button type="button"  className="button remove" onClick={() => removeFormFields(index)}>Remove</button> 
                : null
              }
              <div className="btn-box">
            {formColors.length !== 1 && <button
              className="mr10"
              onClick={() => removeFormFields(index)}>Remove</button>}
            {formColors.length - 1 === index && <button onClick={addFormFields}>Add</button>}
          </div>
            </div>
            
          ))}
          <div className="button-section">
              <button className="button add" type="button" onClick={() => addFormFields()}>Add</button>
              <button className="button submit" type="submit">Submit</button>
          </div>
        </div>
        <div style={{ marginTop: 20 }}>{JSON.stringify(formColors)}</div>
      </form> */}



      {/* <div style={{ marginTop: 20 }}>{JSON.stringify(inputList)}</div> */}
      <div className="form-check">
            <input className="form-check-input" type="checkbox" defaultChecked={checked} onChange={viewColorFields} name="checked" id="flexCheckDefault"/>
            <label className="form-check-label">
                Add By Color And Size
            </label>
      </div>
      <br/>
            {
                checked?
                <form  className="App form-group" autoComplete="off">
                <div className="form-field">
              {formColors.map((element, index) => (
                <div className='form-inline' key={index}>
                  <label htmlFor='colorName'>Color Name</label>
                  <input name='colorName' id='colorName' type="text" className="form-control"  value={element.colorName} onChange={e => handleChangeColor(index, e)} />
                  <label htmlFor='colorCode'>Color Code</label>
                  <input type="text" id='colorCode' className="form-control" name="colorCode" value={element.colorCode || ""} onChange={e => handleChangeColor(index, e)} />
                  <label htmlFor='quantity'>Color Quality</label>
                  <input type="number" id='quantity' className="form-control" name="quantity" value={element.quantity || ""} onChange={e => handleChangeColor(index, e)} />
                  <label htmlFor='size'>Quality Size</label>
                  <input type="text" id='size' className="form-control" name="size" value={element.size || ""} onChange={e => handleChangeColor(index, e)} />
                  {/* {
                    index ? 
                      <button type="button"  className="button remove" onClick={() => removeFormFields(index)}>Remove</button> 
                    : null
                  } */}
                  {/* <div className="btn-box"> */}
                {formColors.length !== 1 && <button 
                    type="button"
                  className="mr10 btn btn-danger"
                  onClick={() => removeFormFields(index)}>Remove</button>}
                {formColors.length - 1 === index && <button className='btn btn-primary' onClick={addFormFields}>Add</button>}
              </div>
                // </div>

              
                
              ))}
              {/* <div className="button-section">
                  <button className="button add" type="button" onClick={() => addFormFields()}>Add</button>
                  <button className="button submit" type="submit">Submit</button>
              </div> */}
            </div>
            <div style={{ marginTop: 20 }}>{JSON.stringify(formColors)}</div>
          </form>
          
                    :
                    <div className="form-group">
                <label>Quantity</label>
                <input
                    type="number"
                    name="quantity"
                    className="form-control"
                    value={quantity}
                    onChange={handleChange} />
            </div>
                
            }
      
            {/* <div className="form-group">
                <label>Quantity</label>
                <input
                    type="number"
                    name="quantity"
                    className="form-control"
                    value={quantity}
                    onChange={handleChange} />
            </div> */}
            <div className="form-group">
                <div>total Quantity:<b>{quantity}</b></div>
            </div>




            <div className="form-group">
                <label>Color</label>
                <select name="color" className="form-control" onChange={handleChange}>
                    <option>Please Select</option>
                    {colors.map(c => <option key={c} value={c}>{c}</option>)}

                </select>
            </div>

            <div className="form-group">
                <label>Brand</label>
                <input
                    type="text"
                    name="brand"
                    className="form-control"
                    value={brand}
                    onChange={handleChange} />
            </div>

            <div className="form-group">
                <label>Category</label>
                <select name="category" className="form-control" onChange={handleCategoryChange}>
                    <option value="">Please select</option>
                    {
                        categories.length > 0 && categories.map((cat) => (
                            <option key={cat._id} value={cat._id}>{
                                cat.name
                            }</option>
                        ))
                    }

                </select>
            </div>

            {showSub &&
                <div>
                    <label>Sub Category</label>
                    <Select
                        mode="multiple"
                        style={{ width: '100%' }}
                        placeholder="please select"
                        value={subs}
                        onChange={value => setValues({ ...values, subs: value })}
                    >
                        {subOptions.length && subOptions.map((s) =>
                            <Option key={s._id} value={s._id}>{s.name}</Option>
                        )}


                    </Select>
                </div>
            }

            <div className="p-3">
                <FileUpload values={values} setValues={setValues}/>
            </div>
            <br />
            <button className="btn btn-outline-info">Save</button>
        </form>
    )
}

export default ProductCreateForm
