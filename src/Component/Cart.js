import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as action from './Action/index';


function Cart() {
    const cart = useSelector(state => state.Addtocart);
    const acc = useSelector(state => state.AccountLoggin);
    const dispatch = useDispatch();

    useEffect(() => {
        if (acc) {
            dispatch(action.asyncloadcart(acc));
        }
    }, [acc])

    // xoa  sap pham :
    var ondelete = (id, acc) => {
        dispatch(action.asyncdeleteproduct(id, acc));
    }

    var showcart = (cart) => {
        var result = '';
        if (cart) {
            result = cart.map((item, index) => {
                return (
                    <tr className="cart-tr" key={index}>
                        <td className="td td-15">
                            <img src={item.url} alt={item.name}></img>
                        </td>
                        <td className="td td-50 ">
                            <p>{item.name}</p>
                            <p>{item.price}$</p>
                        </td>
                        <td className="td td-15">
                            <button onClick={() => ondelete(item._id, acc)}>delete</button>
                        </td>
                    </tr >
                )
            })
        }
        return result;
    }
    // tính tổng tiền:

    var totalMoney = (cart) => {
        var total = 0;
        for (var i = 0; i < cart.length; i++) {
            total += cart[i].price * cart[i].soluong;
        }
        return total;
    }
    return (
        <div className="container-fluid py-5 container-padding">
            <div className="container">
                <h3>GIỎ HÀNG CỦA BẠN</h3>
                {
                    <p>có {cart.length} sản phẩm trong giỏ</p>
                }
            </div>
            <div className="row py-5">
                <div className="col-12 col-sm-8">

                    {
                        cart.length === 0 ? <p>chưa có sản phẩm trong giỏ</p> : <table className="cart-table">
                            <tbody>
                                {
                                    showcart(cart)
                                }
                            </tbody>
                        </table>

                    }


                </div>

                <div className="col-12  col-sm-4 ">
                    <div className="container car-total ">
                        <div>
                            <h4>Thông tin đơn hàng</h4>
                        </div>
                        <div>
                            <p>tổng tiền:</p>
                            {
                                cart ? <p> {totalMoney(cart)} $ </p> : <p> 0 $</p>
                            }
                        </div>
                        <div style={{ borderBottom: "none" }}>
                            <button>Thanh toán</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}


export default Cart

