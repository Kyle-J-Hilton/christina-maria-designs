import React from 'react';

import { client } from '../Lib/client';
import { Product, FooterBanner, HeroBanner } from '../componets';

const gallery = ({ products, bannerData}) => {
  return (
    <div className='background-style'>
    
      <div className="products-heading">
      <h2>Shop</h2>
      <p>Fine Art, Jewelry, and Vintage Accessories</p>
    </div>

    <div className="products-container">
      {products?.map((product) => <Product key={product._id} product={product} />)}
    </div>

    <FooterBanner footerBanner={bannerData && bannerData[0]} />
    </div>
  )
}

export const getServerSideProps = async () => {
    const query = '*[_type == "product"]';
    const products = await client.fetch(query);
  
    const bannerQuery = '*[_type == "banner"]';
    const bannerData = await client.fetch(bannerQuery);
  
    return {
      props: { products, bannerData }
    }
  }

export default gallery
