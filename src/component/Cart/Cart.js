import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((total, course)=> total + parseInt(course.price), 0);
    
    return (
<div className="cart-container">
           
    <div className="card text-white bg-dark">
            <div className="card-header">Course Purchase History</div>
        <div className="card-body card-header">
            <h5 className="card-title">Course Added: {cart.length}</h5> 
            <h6 className="card-text">Total Purchase Cost: {total} </h6>
           
        </div>
     </div>

</div>
        
    );
};

export default Cart;