import * as types from '../Const/Actiontype';

var initialstate = {};


var Reducer = (state = initialstate, action) => {
    switch (action.type) {
        case types.CATREGORYPRODUCTS:
            var products = action.products.products;
            state = products;
            return state;
        default:
            return state;
    }
}
export default Reducer;