import React from 'react';
import Link from 'next/link';

import { urlFor } from '../Lib/client'

const FooterBanner = ({ footerBanner: { discount, largeText1, largeText2, saleTime, smallText, midText, desc, product, buttonText, image} }) => {
  return (
    <div className="footer-banner-container">
      <div className="banner-desc">
        <div className="left">
          
        <img
          src='../favicon.ico'
          className="footer-banner-image"
        />
        </div>
        
        <div className="right">
          <h4>{smallText}</h4>
          <h3>{midText}</h3>
          <h3>{largeText1}</h3>
          <p className='blurb'>I am an artist and creative based in Chicago, Illinois. My fine art draws inspiration from my own, ever-changing mental health journey.
You can usually spot a few strong themes running through my work, such as; 
Love of self, Heartache, Feminine vs. Masculine energies, Meditation, and Movement. </p>
          <Link href={`/bio`}>
            <button type="button">
              My Story
            </button>
          </Link>
        </div>

       

      </div>
    </div>
  )
}

export default FooterBanner
