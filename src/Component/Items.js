import React, { useEffect } from 'react'
import { useLocation } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import * as action from './Action/index';



function Items(props) {
    const location = useLocation();
    const stateProducts = location.state.item;
    const ProItem = useSelector(state => state.InfoItem);
    const acc = useSelector(state => state.AccountLoggin);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(action.InfoProducts(stateProducts))
    }, [])

    var handleupanddown = (item, number) => {
        dispatch(action.Tanggiamsoluong(item, number));
    }
    var TotalMonye = (item) => {
        var total = item.price;
        total *= item.soluong;
        return total;

    };
    // thêm sản phẩm vào giỏ hàng
    var add = (item, acc) => {
        if (acc === "") {
            alert('bạn cần phải đăng nhập đăng nhập');
        }
        dispatch(action.asyncaddtocart(item, acc));
    }
    return (
        <div className="container-fluid py-5 container-padding">
            <div className="row item">
                <div className="col-6 h-100">
                    <div className="card h-100">
                        <div className="card-body h-100 p-0">
                            <div className="card-image h-100">
                                <img src={ProItem.url} alt={ProItem.discription} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-6 title-item">
                    <div className="card-title title-item-cart h-50">
                        <h2>{ProItem.name} </h2>
                        <p>{ProItem.discription}</p>
                        <h2>{TotalMonye(ProItem)}$</h2>
                    </div>
                    <div className="quantity h-25">
                        <h2>Số lượng</h2>
                        <button className="quantity-box " onClick={() => handleupanddown(ProItem, -1)}>-</button>
                        <div className="quantity-box "> {ProItem.soluong} </div>
                        <button className="quantity-box " onClick={() => handleupanddown(ProItem, 1)}>+</button>
                    </div>
                    <div className="card-boton title-item-button h-25">
                        <input className="bg-info" type="submit" value="Thêm vào giỏ" onClick={() => add(ProItem, acc)} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Items

