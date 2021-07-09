import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import * as action from './Action/index';
import Call from './CallAPI/Call';


function Account() {
    const tkloggin = useSelector(state => state.AccountLoggin);
    const dispatch = useDispatch();
    const [Account, setAccount] = useState(
        {
            email: '',
            password: '',

        });


    var onchange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.value;
        e.preventDefault();
        setAccount(
            {
                ...Account,
                [name]: value
            }
        )
    };
    // tạo tài khoản
    var handleCreateAccount = async (Account) => {
        await Call("accout/create", "POST",
            Account
        )
            .then(res => {
                alert(res.data);
            })
        setAccount({
            email: '',
            password: '',
        });
    }
    // đăng nhập tài khoản
    var Loggin = (Account) => {
        dispatch(action.asyncloggin(Account))
        setAccount({
            email: '',
            password: '',
        });
    }

    if (tkloggin) {
        return (
            <Redirect to="/Acmanager" />
        )
    }
    return (

        <div className="container-fluid py-5">
            <div className="account">
                <div className="account_box">
                    <h2> Đăng Nhập Tài Khoản</h2>
                    <p>xin chào {tkloggin}</p>
                </div>
                <div className="account_box">
                    <input type="text" name="email" placeholder="tên tài khoản của bạn" value={Account.email} onChange={onchange}></input>
                    <input type="text" name="password" placeholder="nhập password" value={Account.password} onChange={onchange}></input>
                </div>
                <div className="account_box justify-conten">
                    <button className="dangnhap" onClick={() => handleCreateAccount(Account)}>Tạo tài khoản</button>
                    <button className="dangnhap" onClick={() => Loggin(Account)}>Đăng nhập</button>
                </div>
            </div>
        </div>

    )
}

export default Account

