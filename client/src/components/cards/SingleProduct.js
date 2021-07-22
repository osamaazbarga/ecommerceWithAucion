import React from 'react'
import { Card } from 'antd'
import { Link } from 'react-router-dom'
import { HeartOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import defaultImageProduct from '../../images/defaultimageproduct.png'
const { Meta } = Card;

const SingleProduct = ({ product }) => {
    const { title, images, slug } = product
    return (
        <div className="row pt-4">
            <div className="col-md-7">
                {images && images.length ? <Carousel
                    showArrows={true}
                    autoPlay
                    infiniteLoop
                >
                    {images && images.map((i) => {
                        return (
                            <img src={i.url} key={i.public_id} />
                        )
                    })}
                </Carousel>
                    : (
                        <Card

                            cover={<img
                                src={defaultImageProduct}
                                className="mb-3 card-image"
                            />}

                        >

                        </Card>
                    )
                }
            </div>

            <div className="col-md-5">
            <h1 className="bg-info p-3">{title}</h1>
                <Card
                    actions={[
                        <div>
                            <ShoppingCartOutlined className="text-success" />Add to Cart
                        </div>,
                        <Link to={`/product/${slug}`}><HeartOutlined className="text-info" /><br /> Add to Wishlist</Link>
                    ]}
                >
                    {/* <Meta title={title} description={description} /> */}
                    <p>
                        price/category/subs/shipping/
                    </p>
                </Card>
            </div>
        </div>
    )
}

export default SingleProduct
