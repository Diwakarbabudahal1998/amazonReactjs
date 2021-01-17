import React from 'react';
import { useStateValue } from '../StateProvider/StateProvider';
import Subtotal from '../Subtotal/Subtotal';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';

function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue();
    let email = user?.email.split('@', 1)
    return (
        <div className='checkout'>
            <div className='checkout__left'>
                <img className='checkout__ad'
                    src=' https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg'
                    alt='' />
                <div className='checkout__title'>
                    <h3>Hello, {email}</h3>
                    <h2> Your Shopping Basket🧺 </h2>
                    {/* CheckoutProduct */}
                    {basket.map(item => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            price={item.price}
                            image={item.image}

                            rating={item.rating}
                        />
                    ))}
                </div>
            </div>
            <div className='checkout__right'>
                <Subtotal />
            </div>
        </ div >
    )
}

export default Checkout;
