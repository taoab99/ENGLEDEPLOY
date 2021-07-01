import * as types from '../Const/Actiontype';

var initialstate = [];
var Reducer = (state = initialstate, action) => {
    switch (action.type) {
        case types.GETPRODUCTSHOP:
            state = action.products;
            return state;
        default: return state;
    }
};
export default Reducer; 