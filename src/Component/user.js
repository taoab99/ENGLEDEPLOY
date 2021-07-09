import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import * as action from './Action/index';

function Donhang(props) {
    const Datauser = useSelector(state => state.Datauser);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(action.asyncgetalluser());
    }, [])

    const showaccount = (arr) => {
        if (arr) {
            return arr.map((item, index) => {
                return (
                    <tr key={index}>
                        <td style={{ textAlign: 'left' }}>{item.email}</td>
                        <td>0{item.phone}</td>
                        <td>{item.from}</td>
                        <td>{item.createdAt}</td>
                        <td>{item.cart.length}</td>
                    </tr>
                );
            })
        }
        return <tr><td>null</td></tr>;

    }

    return (
        <div className="thongtindangnhap">
            <div className="hoso">
                <h1>Người dùng</h1>
            </div>
            {Datauser.length === 0 && <div>loading</div>}
            {Datauser.length !== 0 &&
                <div className="px-1 pt-5">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Tài khoản</th>
                                <th scope="col">Số điện thoại</th>
                                <th scope="col">địa chỉ</th>
                                <th scope="col">Ngày tạo</th>
                                <th scope="col">Đã mua</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                showaccount(Datauser)
                            }
                        </tbody>
                    </table>
                </div>
            }
        </div>
    )
}

export default Donhang

