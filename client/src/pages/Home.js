import React, { useEffect, useState } from 'react'
import Jumbotron from '../components/cards/Jumbotron'
import NewArrivals from '../components/home/NewArrivals'
import BestSellers from '../components/home/BestSellers'
import CategoryList from '../components/category/CategoryList'
import SubList from '../components/sub/SubList'

const Home = () => {
    
    return (
        <div>
            <div className="jumbotron text-danger h1 font-weight-bold text-center">
                hi there
                <Jumbotron text={['osama','azbarga']}/>
                
            </div>
            {/* {
                fetch('https://www.hebcal.com/converter?cfg=json&gy=2011&gm=6&gd=2&g2h')
                .then(response => response.json())
                // .then(data => console.log(data));
                // console.log('osama')
            } */}
            {/* <div>osama</div> */}

            <h4 className="text-center p-3 mt-5 mb-5 display-4 jumbotron">New Arrivals</h4>
            <NewArrivals/>
            <h4 className="text-center p-3 mt-5 mb-5 display-4 jumbotron">Best Sellers</h4>
            <BestSellers/>
            <h4 className="text-center p-3 mt-5 mb-5 display-4 jumbotron">Categories</h4>
            <CategoryList/>
            <h4 className="text-center p-3 mt-5 mb-5 display-4 jumbotron">Sub Categories</h4>
            <SubList/>
            

        </div>

    )
}

export default Home
