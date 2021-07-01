import * as types from '../Const/Actiontype';

var initialstate = JSON.parse(localStorage.getItem('accountemail')) ? JSON.parse(localStorage.getItem('accountemail')) : '';


var Reducer = (state = initialstate, action) => {
    switch (action.type) {

        //đăng nhập tài khoản
        case types.LOGGIN:
            if (action.account.status === true) {

                const email = action.account.account;
                const id = action.account.id;
                state = email;
                alert(action.account.message);
                localStorage.setItem("accounttoken", JSON.stringify(id));
                localStorage.setItem("accountemail", JSON.stringify(state));
            }
            else {
                alert(action.account.message);
            }
            return state;


        // đăng xuất tài khoản
        case types.LOGGOUT:

            if (window.confirm("bạn có muốn đăng xuất!")) {
                state = null;
                localStorage.setItem("accounttoken", '');
                localStorage.setItem('accountemail', JSON.stringify(state));
                return state;
            } else {
                return state;
            }

        default:
            return state;
    }
}
export default Reducer;