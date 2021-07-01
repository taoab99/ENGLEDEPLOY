import Homepage from './Homepage';
import Shoppage from './Shoppage';
import Contactpage from './Contactpage';
import Cart from './Cart';
import Items from './Items';
import Account from './Account';
import CartegoryProducts from './CartegoryProducts';
const Route = [
    {
        path: "/",
        exact: true,
        main: () => <Homepage />
    },
    {
        path: "/ProductsDipcription/:slug",
        exact: true,
        main: () => <Items />
    },
    {
        path: "/ACCOUNT",
        exact: false,
        main: () => <Account />
    },
    {
        path: "/SHOP",
        exact: false,
        main: () => <Shoppage />
    },
    {
        path: "/CONTACT",
        exact: false,
        main: () => <Contactpage />
    },
    {
        path: "/Cart",
        exact: false,
        main: () => <Cart />
    },
    {
        path: "/CartegoryProducts/:slug",
        exact: true,
        main: () => <CartegoryProducts />
    },
];

export default Route;