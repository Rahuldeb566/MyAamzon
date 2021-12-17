import React from 'react'
import "./Home.css";
import Product from './Product';

function Home() {
    return (
        <div className='home'>
            <div className="home_container">
                <img className="home_image" 
                src="https://img.freepik.com/free-psd/headphone-brand-product-sale-facebook-cover-banner_161103-93.jpg?size=626&ext=jpg" alt="" />

                <div className="home_row">
                    <Product
                    id="12321341"
                    title="The lean startup"
                    price={29.99}
                    image="https://static-01.daraz.com.bd/p/b98eeb31d6b886df372154823e40704e.jpg"
                    rating={5} />
                    <Product 
                    id="49538094"
                    title="Mixer Blender"
                    price={289.0}
                    image="https://brain-images-ssl.cdn.dixons.com/6/2/10208626/u_10208626.jpg"
                    rating={4}
                    />
                    {/* Product */}
                </div>
                <div className="home_row">
                <Product
                    id="4903850"
                    title="Samsung Curve TV 43"
                    price={299.99}
                    image="https://sc04.alicdn.com/kf/Uea1688d024384bdb8faeae4c39cbf0d7y.jpg"
                    rating={3} />
                    <Product 
                    id="23445930"
                    title="Amazon eco"
                    price={98.95}
                    image="https://mobileimages.lowes.com/productimages/1bd5e292-b68d-4877-8400-b983034381ec/12025270.jpg?size=pdhi"
                    rating={5}
                    />
                    <Product 
                    id="3254354345"
                    title="Apple Ipad Pro"
                    price={500.0}
                    image="https://www.startech.com.bd/image/cache/catalog/tablet/apple/ipad-pro-2020/ipad-pro-2020-01-500x500.jpg"
                    rating={4}
                     />
                    {/* Product */}
                    {/* Product */}
                    {/* Product */}
                </div>
                <div className="home_row">
                    <Product 
                    id="90829332"
                    title="Samsung Smart Watch"
                    price={1100.79}
                    image="https://cdn.shopify.com/s/files/1/1706/9177/products/gwa.jpg?v=1613634911"
                    rating={5}
                    />
                    {/* Product */}
                </div>
            </div>
        </div>
    )
}

export default Home
