import React from 'react'
import { images } from '../../constants'

import './scroll.scss'
const Scroll = () => {
    return (
        <div className='image__app-slider'>
            <div className="image-slider">
                <img src={images.react} alt="react-logo" />
                <img src={images.sanity} alt="sanity-logo" />
                <img src={images.shopify} alt="shopify-logo" />
                <img src={images.woo} alt="woo-logo" />
                <img src={images.wordpress} alt="wordpress-logo" />
                <img src={images.js} alt="js-logo" />
                <img src={images.node} alt="nodejs-logo" />
                <img src={images.css} alt="css-logo" />
                <img src={images.html} alt="html-logo" />
            </div>

            <div className="image-slider">
                <img src={images.react} alt="react-logo" />
                <img src={images.sanity} alt="sanity-logo" />
                <img src={images.shopify} alt="shopify-logo" />
                <img src={images.woo} alt="woo-logo" />
                <img src={images.wordpress} alt="wordpress-logo" />
                <img src={images.js} alt="js-logo" />
                <img src={images.node} alt="nodejs-logo" />
                <img src={images.css} alt="css-logo" />
                <img src={images.html} alt="html-logo" />
            </div>
        </div>
    )
}

export default Scroll
