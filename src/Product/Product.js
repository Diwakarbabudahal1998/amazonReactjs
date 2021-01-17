import React from 'react';
import { useStateValue } from '../StateProvider/StateProvider';
import './Product.css';
import '../Reducer/reducer';
function Product({ id, title, rating, price, image }) {
    const [{ basket }, dispatch] = useStateValue();
    /* console.log('this is the basket', basket); */
    const addToBasket = () => {
        //dispatch the item 
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                price: price,
                rating: rating,
                image: image
            }
        })
    }
    return (
        <div className='product'>
            <div className='product__info'>
                <p>{title}</p>
                <p className='product__price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className='product__rating'>
                    {Array(rating).fill().map((_, i) => (
                        <p>⭐</p>
                    ))}

                </div>
            </div>
            <img src={image} alt=""></img>
            <button onClick={addToBasket}>Add to Basket</button>
        </ div >
    )
}

export default Product
