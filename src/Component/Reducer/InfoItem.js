import * as types from '../Const/Actiontype';

var initialstate = [];

var Reducer = (state = initialstate, action) => {
    switch (action.type) {

        case types.INFOPRODUCTS:
            var item = action.item;
            item.soluong = 1;
            return item;

        case types.TANGGIAMSOLUONG:
            var data = {
                ...action.item,
                soluong: action.item.soluong + action.number
            }
            if (data.soluong > 0)

                return data; break;

        default: return state;
    }
}

export default Reducer;