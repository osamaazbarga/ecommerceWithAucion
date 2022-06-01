import React from 'react'
// import { useHistory } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux'
import { SearchOutlined } from '@ant-design/icons'

const Search = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const { search } = useSelector((state) => ({ ...state }))
    const { text } = search
    // const history = useHistory()
    const handleChange = (e) => {
        dispatch({
            type: "SEARCH_QUERY",
            payload: { text: e.target.value }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate(`/shop?${text}`)
    }

    return (
        <form className="form-inline my-2 my-lg-0" onSubmit={handleSubmit}>
            <input onChange={handleChange} type="search" value={text} className="form-control mr-sm-2" placeholder="Search"/>
            <SearchOutlined onClick={handleSubmit} style={{cursor:'pointer'}}/>
        </form>
        // <form className="" onSubmit={handleSubmit}>
        //     <div className="input-group rounded">
        //         <input onChange={handleChange} type="search" value={text} className=" rounded" placeholder="Search" />
        //         {/* <SearchOutlined onClick={handleSubmit} style={{cursor:'pointer'}}/> */}
        //         <span class="input-group-text border-0" id="search-addon">
        //             <i class="fas fa-search" onClick={handleSubmit} style={{ cursor: 'pointer' }}></i>
        //         </span>
        //     </div>
        // </form>
    )
}

export default Search
