import * as types from '../Const/Actiontype';


var initialstate = [];

var Reducer = (state = initialstate, action) => {
    switch (action.type) {
        case types.GETDONHANG:
            const donhang = action.donhang;
            state = donhang;
            return state;

        default: return state;
    }
}

export default Reducer;