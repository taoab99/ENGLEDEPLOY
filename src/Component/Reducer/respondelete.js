import * as types from '../Const/Actiontype';

var Reducer = (state = '', action) => {
    switch (action.type) {
        case types.DELETESANPHAM:
            const message = action.respon.message;
            if (message) {
                alert(message);
                state = message;
            }
            return state;
        default:
            return state;
    }
}

export default Reducer;