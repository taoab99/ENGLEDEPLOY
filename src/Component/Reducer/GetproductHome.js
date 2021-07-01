import * as types from '../Const/Actiontype';


var initialstate = [];
var myReduce = (state = initialstate, action) => {
    switch (action.type) {
        case types.HOME_PRODUCTS:
            state = action.products;
            return state;
        default: return state;
    }
};

export default myReduce;