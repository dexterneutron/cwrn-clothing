import React from "react";
import {createStructuredSelector} from 'reselect'

import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item-component";

import { connect } from "react-redux";
import { selectCarItems } from "../../redux/cart/cart.selectors";

import './cart-dropdown.styles.scss';

const CartDropDown = ({cartItems}) =>(

    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
            }
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCarItems
});

export default connect(mapStateToProps)(CartDropDown);