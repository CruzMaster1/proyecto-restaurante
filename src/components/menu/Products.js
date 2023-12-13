import React from 'react';
import './products.css';

function Products(props) {
    return(
<div className='products'>
        <h3>{props.name}</h3>
        <h3>{props.description}</h3>
        <h3>{props.price}</h3>
        <img src={props.image} alt='products-img' className='products-img'/>  
    </div>
    )
};

export default Products;


