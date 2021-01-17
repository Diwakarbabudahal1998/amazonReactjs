import React from 'react';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from '../Reducer/reducer';
import { useStateValue } from '../StateProvider/StateProvider';
import './Subtotal.css';

function Subtotal() {
    const [{ basket }, dispatch] = useStateValue();
    return (
        <div className='subtotal'>
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket?.length} items):
                            <strong>{value}</strong>
                        </p>
                        <small className='subtotal__gift'>
                            <input type='checkbox' />
                            This order contain a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={'text'}
                thousandSeperator={true}
                prefix={'$'}
            />
            <button>Proceed to Checkout</button>
        </div >
    )
}

export default Subtotal;
