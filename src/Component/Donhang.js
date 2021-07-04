import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import * as action from './Action/index';

function Donhang(props) {
    const Donhang = useSelector(state => state.Donhang)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(action.asyncdonhang())
    }, [])

    // hiển thị bảng đơn hàng
    const showtable = (Donhang) => {
        var result = '';
        if (Donhang.length > 0) {
            result = Donhang.map(
                (item, index) => {
                    return (
                        <table key={index} className="table">
                            <thead className="thead-light">
                                <tr>
                                    <th scope="col">Đơn {index + 1}</th>
                                    <th scope="col">Danh mục</th>
                                    <th scope="col">Tên sản phẩm</th>
                                    <th scope="col">Số lượng</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    showrow(item.cart)
                                }
                                <tr>

                                    <td colSpan="3">{item.acc}</td>
                                    <td className="">
                                        <p> {
                                            showmonnye(item.cart)
                                        }đ</p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    )

                })
        }
        return result;
    }

    // hiển thị từng đơn hàng trong bảng
    const showrow = (cart) => {
        var result = '';
        if (cart) {
            result = cart.map(
                (item, index) => {
                    return (
                        <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{item.category}</td>
                            <td>{item.name}</td>
                            <td>{item.soluong}</td>
                        </tr>
                    )
                })
        }
        return result;
    }

    // tính tiền cho đơn hàng

    const showmonnye = (cart) => {
        var total = 0;
        for (let i = 0; i < cart.length; i++) {
            total += (cart[i].price - (cart[i].price / 100 * cart[i].sale)) * cart[i].soluong;
        }
        return total;
    }
    return (
        <div className="container-fluid py-5 container-padding">
            {Donhang.length === 0 && <div>loading</div>}
            {Donhang.length !== 0 &&
                <div className="px-5">
                    {
                        showtable(Donhang)
                    }
                </div>
            }
        </div>
    )
}

export default Donhang

