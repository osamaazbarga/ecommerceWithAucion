import React from 'react'
import { Card, Tabs } from 'antd'
import { Link } from 'react-router-dom'
import { HeartOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import defaultImageProduct from '../../images/defaultimageproduct.png'
import ProductListItems from './ProductListItems';
import StarRating from 'react-star-ratings'
import RatingModal from '../modal/RatingModal';
const { TabPane } = Tabs

const SingleProduct = ({ product, onStarClick, star }) => {
    const { title, images, slug, description, _id } = product
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
                            <ShoppingCartOutlined className="text-success" /><br />Add to Cart
                        </div>,
                        <Link to={`/product/${slug}`}><HeartOutlined className="text-info" /><br /> Add to Wishlist</Link>,
                        <RatingModal>
                            {/* <StarRating
                        name={_id}
                        numberOfStars={5}
                        rating={5}
                        changeRating={onStarClick}
                        isSelectable={true}
                        starRatedColor="gray"
                        // starHoverColor="#FFC300"
                    /> */}
                            <StarRating
                                rating={star}
                                starRatedColor="#FFC300"
                                starHoverColor="#FFC300"
                                changeRating={onStarClick}
                                numberOfStars={5}
                                name={_id}
                            />
                        </RatingModal>
                    ]}
                >
                    {/* <Meta title={title} description={description} /> */}
                    <ProductListItems product={product} />
                </Card>
            </div>

            <div className="card-container">
                <Tabs type="card">
                    <TabPane tab="Description" key="1">{description && description}</TabPane>
                    <TabPane tab="More" key="2">Call use On Number</TabPane>

                </Tabs>
            </div>

        </div>
    )
}

export default SingleProduct
