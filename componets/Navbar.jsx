import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai';

import { Cart } from './';
import { useStateContext } from '../context/StateContext';

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  return (
    <div className='header'>
      <div id='headerLogo'> 
      </div>
      <div id='headerLinks'>
        <a className='a' href="/bio" >Bio</a>
        <a className='a' href="/gallery" >Gallery</a>
        <a className='a' href="/" >Home</a>
      </div>
      <button type='button' className='cart-icon' onClick={() => setShowCart(true)}>
        <AiOutlineShopping />
        <span className='cart-item-qty'>{totalQuantities}</span>
      </button>
      {showCart && <Cart />}
    </div>
  )
}

export default Navbar
