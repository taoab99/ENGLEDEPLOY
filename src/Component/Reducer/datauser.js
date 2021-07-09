import * as types from '../Const/Actiontype';

var Reducer = (state = [], action) => {
    switch (action.type) {
        case types.QUANLYUSER:
            const data = action.datause;
            state = data;

            return state;
        default:
            return state;
    }
}

export default Reducer;