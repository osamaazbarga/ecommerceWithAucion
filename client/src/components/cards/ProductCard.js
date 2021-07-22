import React from 'react'
import { Card } from 'antd';
import {EyeOutlined,ShoppingCartOutlined}from '@ant-design/icons'
import defaultImage from '../../images/defaultimageproduct.png'
import {Link} from 'react-router-dom'
const { Meta } = Card;

const ProductCard = ({product}) => {
    const { title, description, price, images ,slug} = product

    return (
        <Card
            hoverable
            // style={{ width: 240 }}
            cover={<img 
                src={images&&images.length?images[0].url:defaultImage} 
                style={{height:150,objectFit:"cover"}}
                className="p-1"
            />}
            actions={[
                <Link to={`/product/${slug}`}><EyeOutlined className="text-warning"/>
                <br/>View
                </Link>,
                <div><ShoppingCartOutlined className="text-danger"/><br/>Add to Cart</div>
            ]}
        >
            <Meta title={title} description={`${description&&description.substring(0,40)}...`} />

        </Card>
    )
}

export default ProductCard