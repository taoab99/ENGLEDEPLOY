import { combineReducers } from 'redux';
import GetproductHome from './GetproductHome';
import productsShop from './productsShop';
import InfoItem from './InfoItem';
import Addtocart from './addtocart';
import AccountLoggin from './Loggin';
import Category from './category';

const myReducers = combineReducers({
    state: GetproductHome,
    productsShop,
    InfoItem,
    Addtocart,
    AccountLoggin,
    Category

});
export default myReducers;