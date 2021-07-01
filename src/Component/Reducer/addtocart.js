import * as types from '../Const/Actiontype';

var initialstate = [];


var Reducer = (state = initialstate, action) => {
    switch (action.type) {
        case types.GETALLCART:
            var loadcart = action.cart;
            state = loadcart.cart;
            return state;
        case types.ADDTOCART:
            var cart = action.product;
            if (cart.cart) {
                state = cart.cart
                alert(cart.message);
            }
            alert(cart.message);
            return state;
        case types.DELETEPD:

            var carter = action.cart;
            const message = action.cart.message;
            if (carter.cart) {
                state = carter.cart;
                alert(message);
            }
            alert(message);
            return state;
        default:
            return state;
    }
}

export default Reducer;