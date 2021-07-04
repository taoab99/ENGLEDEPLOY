import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import * as action from './Action/index';
import Call from './CallAPI/Call';
import Upload from './Upload';


function Account() {
    const tkloggin = useSelector(state => state.AccountLoggin);
    const dispatch = useDispatch();
    const [upload, setupload] = useState(false);
    const [Account, setAccount] = useState(
        {
            email: '',
            password: '',

        });

    const handleupload = () => {
        setupload(
            !upload
        )
    }

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
    // đăng xuất tài khoản
    var logGout = () => {
        dispatch(action.loggOut());
    }
    return (

        <div className="container-fluid py-5">

            {
                upload === true && <div className="account">
                    <Upload
                        handleupload={handleupload}
                    />
                </div>
            }
            {
                upload === false &&
                <div className="account">
                    <div className="account_box">
                        <h2> Đăng Nhập Tài Khoản</h2>
                        <p>xin chào {tkloggin}
                            {
                                localStorage.getItem('status') === "true" && <Link to="/donhang" style={{ border: '1px solid gray' }}>xem đơn hàng</Link>
                            }
                        </p>
                    </div>
                    <div className="account_box">
                        <input type="text" name="email" placeholder="tên tài khoản của bạn" value={Account.email} onChange={onchange}></input>
                        <input type="text" name="password" placeholder="nhập password" value={Account.password} onChange={onchange}></input>
                    </div>
                    <div className="account_box justify-conten">
                        <button className="dangnhap" onClick={() => handleCreateAccount(Account)}>Tạo tài khoản</button>
                        <button className="dangnhap" onClick={() => Loggin(Account)}>Đăng nhập</button>
                    </div>
                    <div className="account_box">
                        <p className="text-primary" style={{ cursor: "pointer" }} onClick={logGout}>Đăng xuất</p>
                        <p style={{ cursor: "pointer" }} onClick={handleupload}>đăng sản phẩm</p>
                    </div>
                </div>

            }
        </div>

    )
}

export default Account

