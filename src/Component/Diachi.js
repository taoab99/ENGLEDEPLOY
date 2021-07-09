import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import '../Thongtindangnhap.css';
import Call from './CallAPI/Call';


function Diachi(props) {
    const acc = useSelector(state => state.AccountLoggin);
    console.log(acc)
    const [state, setstate] = useState({
        phone: '',
        diachi: ""
    })
    useEffect(async () => {
        await Call('accout/getthongtin', 'POST', {
            name: acc
        })
            .then(res => {
                console.log(res.data);
                setstate({
                    phone: res.data.phone,
                    diachi: res.data.diachi
                })
            })
    }, [acc]);
    return (
        <div className="thongtindangnhap">
            <div className="hoso">
                <h1>Địa Chỉ Giao Hàng</h1>
            </div>

            <div className="form_name">
                <div className="form_box">
                    <div className="form_box1"><p>Tên tài khoản</p></div>
                    <div className="form_box2"><p>{acc}</p></div>
                </div>
                <div className="form_box">
                    <div className="form_box1"><p>số điện thoại</p></div>
                    <div className="form_box2">
                        <p>{state.phone}</p>
                    </div>
                </div>
                <div className="form_box">
                    <div className="form_box1"><p> địa chỉ</p></div>
                    <div className="form_box2">
                        <p>{state.diachi}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Diachi;

