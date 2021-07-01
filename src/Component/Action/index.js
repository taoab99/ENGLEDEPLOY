import * as types from '../Const/Actiontype';
import Call from '../CallAPI/Call';


export const goi = (enpont) => {
    return async (dispatch) => {
        return await Call(enpont, 'GET', null).then(res => {
            dispatch(GetProducts(res.data));
        });
    }
}
export const goiApiShop = () => {
    return async (dispatch) => {
        return await Call('products', 'GET', null).then(res => {
            dispatch(GetProducts(res.data));
        });
    }
}

export const GetProductsShop = (products) => {
    return {
        type: types.GETPRODUCTSHOP,
        products,
    }
}
export const GetProducts = (products) => {
    return {
        type: types.HOME_PRODUCTS,
        products: products
    }
};

// tăng giảm số lượng của sản phẩm:

export const Tanggiamsoluong = (item, number) => {
    return {
        type: types.TANGGIAMSOLUONG,
        item: item,
        number: number
    }
};
export const InfoProducts = (item) => {
    return {
        type: types.INFOPRODUCTS,
        item: item
    }
}
// load cart 
export const asyncloadcart = (acc) => {
    return async (dispatch) => {
        await Call(`accout/getallcart?email=${acc}`, 'GET', null)
            .then(
                res => {
                    dispatch(loadcart(res.data));
                })
    }
}
export const loadcart = (cart) => {
    return {
        type: types.GETALLCART,
        cart: cart
    }
}

// xóa sản phẩm trong giỏ hàng

export const asyncdeleteproduct = (idItem, acc) => {
    return async (dispatch) => {
        await Call('accout/deleteItemcart', 'POST', {
            idItem: idItem,
            email: acc
        })
            .then(res => {
                dispatch(deleteproducts(res.data));
            })
    }
}
export const deleteproducts = (cart) => {
    return {
        type: types.DELETEPD,
        cart: cart

    }
}


//redux- thunk loggin 
export const asyncloggin = (account) => {
    return async (dispatch) => {
        return await Call('accout/loggin', 'POST', account).then(res => {
            dispatch(loggin(res.data));
        });
    }
}
// action loggin
export const loggin = (account) => {
    return {
        type: types.LOGGIN,
        account: account
    }
}

export const asyncaddtocart = (product, acc) => {
    return (dispatch) => {
        Call('accout/addtocart', 'POST', {
            email: acc,
            cart: product
        }).then(res => {
            dispatch(addtocart(res.data));
        });
    }
}
export const addtocart = (product) => {
    return {
        type: types.ADDTOCART,
        product: product,
    }
}
export const loggOut = () => {
    return {
        type: types.LOGGOUT
    };

}
//  lấy sản phẩm theo danh mục

export const asyncgetcategory = (enpont) => {
    return async (dispatch) => {
        await Call(`products/getproducbycategry?name=${enpont}`, 'GET', null)
            .then(res => {
                dispatch(category(res.data));
            })
    }
}

export const category = (products) => {
    return {
        type: types.CATREGORYPRODUCTS,
        products
    }
}