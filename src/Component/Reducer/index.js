import { combineReducers } from 'redux';
import GetproductHome from './GetproductHome';
import productsShop from './productsShop';
import InfoItem from './InfoItem';
import Addtocart from './addtocart';
import AccountLoggin from './Loggin';
import Category from './category';
import Donhang from './donhang';
import Respondeletesp from './respondelete';
import Datauser from './datauser'

const myReducers = combineReducers({
    state: GetproductHome,
    productsShop,
    InfoItem,
    Addtocart,
    AccountLoggin,
    Category,
    Donhang,
    Respondeletesp,
    Datauser

});
export default myReducers;