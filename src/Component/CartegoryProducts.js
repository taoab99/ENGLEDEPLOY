import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, Link } from 'react-router-dom';
import * as actions from './Action/index';



// showproducCategory
var showproducts = (products) => {
    var result = "";
    if (products) {
        result = products.map((item, index) => {
            return (
                <div className="col-6 col-sm-3 py-2" key={index}>
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="card-image">
                                <img src={item.url} alt={item.name} />
                            </div>
                            <div className="card-title">
                                <h6> {item.name} </h6>
                                <p>{item.price}$</p>
                            </div>
                            <div className="card-boton">
                                <Link to={{
                                    pathname: `/ProductsDipcription/${item.name}`,
                                    state: {
                                        item: item
                                    }
                                }}>
                                    <input className="bg-info" type="submit" value="Chi tiết sản phẩm" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            );
        });
    };
    return result;
}


function CartegoryProducts() {

    const Category = useSelector(state => state.Category)
    const location = useLocation();
    const dispatch = useDispatch()
    const state = location.state;

    useEffect(() => {
        dispatch(actions.asyncgetcategory(state));
    }, [state])



    return (
        <div className="container-fluid py-4 container-padding " style={{ minHeight: '300px' }}>
            <h3 style={{ textAlign: 'left' }}>{state}</h3>
            <p>tìm thấy {Category.length} sản phẩm liên quan</p>
            <div class="row py-3">
                {
                    Category.length > 0 &&

                    showproducts(Category)
                }
            </div>
        </div>
    );
}

export default CartegoryProducts;