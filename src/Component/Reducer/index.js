import { combineReducers } from 'redux';
import GetproductHome from './GetproductHome';
import productsShop from './productsShop';
import InfoItem from './InfoItem';
import Addtocart from './addtocart';
import AccountLoggin from './Loggin';
import Category from './category';
import Donhang from './donhang';

const myReducers = combineReducers({
    state: GetproductHome,
    productsShop,
    InfoItem,
    Addtocart,
    AccountLoggin,
    Category,
    Donhang

});
export default myReducers;