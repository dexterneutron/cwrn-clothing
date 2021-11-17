import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCarItems = createSelector(
    [selectCart],
    cart => cart.cartItems,
);

export const selectCarItemsCount = createSelector(
    [selectCarItems],
    cartItems =>
        cartItems.reduce(
            (accumulatedQty, carItem)=>accumulatedQty+carItem.quantity,
         0
    )
);

export const selectCarHidden = createSelector(
    [selectCart],
    cart => cart.hidden
);

export const selectCartTotal = createSelector(
    [selectCarItems],
    cartItems =>
        cartItems.reduce(
            (accumulatedQty, cartItem)=>accumulatedQty+(cartItem.quantity * cartItem.price),
         0
    )


);