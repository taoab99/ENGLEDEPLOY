import React, { useState } from 'react';
import '../Thongtindangnhap.css';
import Call from './CallAPI/Call';
import { useSelector } from 'react-redux';


function Thongtintaikhoan(props) {
    const acc = useSelector(state => state.AccountLoggin);
    const [infor, setinfor] = useState({
        phone: "",
        from: ""
    });

    const onchangeinfor = (e) => {
        var name = e.target.name;
        var value = e.target.value;
        setinfor({
            ...infor,
            [name]: value
        });
    }

    const submitinfor = async (e) => {
        e.preventDefault();

        if (infor.phone === "" || infor.from === "") {
            alert("vui lòng nhập vào ô thông tin");
        }
        else {
            await Call('accout/updateacc', 'POST', {
                phone: infor.phone,
                from: infor.from,
                acc: acc
            })
                .then(res => {
                    alert(res.data.message);
                });
            setinfor({
                phone: "",
                from: ""
            })

        }
    }

    return (
        <div className="thongtindangnhap">
            <div className="hoso">
                <h1>Hồ Sơ Của Tôi</h1>
                <p>Quản lý thông tin hồ sơ để bảo mật tài khoản</p>
            </div>

            <form>
                <div className="form_name">
                    <div className="form_box">
                        <div className="form_box1"><p>Tên Đăng Nhập</p></div>
                        <div className="form_box2"><p>{acc}</p></div>
                    </div>
                    <div className="form_box">
                        <div className="form_box1"><p>Thêm số điện thoại</p></div>
                        <div className="form_box2">
                            <input className="input1" type="number" name="phone" value={infor.phone} placeholder="nhập số điện thoại" onChange={onchangeinfor} />
                        </div>
                    </div>
                    <div className="form_box">
                        <div className="form_box1"><p>Thêm địa chỉ</p></div>
                        <div className="form_box2">
                            <input className="input2" type="text" name="from" value={infor.from} placeholder="nhập địa chỉ" onChange={onchangeinfor} />
                        </div>
                    </div>
                    <div className="form_box_botton">
                        <button className="btn btn-solid-primary text-white" onClick={submitinfor}>Lưu</button>
                    </div>

                </div>


            </form>
        </div>
    )
}

export default Thongtintaikhoan

