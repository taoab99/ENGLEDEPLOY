import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    Link
} from 'react-router-dom';
import '../Acmanager.css';
import Diachi from './Diachi';
import Thongtintaikhoan from './Thongtintaikhoan';
import { useDispatch, useSelector } from 'react-redux';
import Upload from './Upload';
import Donhang from './Donhang';
import Qanlysanpham from './Quanlysanpham';
import User from './user';
import * as action from './Action/index';

function Acmanager(props) {
    const acc = useSelector(state => state.AccountLoggin);
    const dispatch = useDispatch();
    const toggle = localStorage.getItem('status');

    var logGout = () => {
        dispatch(action.loggOut());
    }

    if (acc == null) {
        return (
            <Redirect to="/" />
        )
    }
    return (
        <Router>

            <div className="container-fluid py-5 container-padding">
                <div className="row">
                    <div className="col-sm-3">
                        <div className="box_width">
                            <p>{acc}</p>
                        </div>

                        <div className="box_ul">
                            {
                                toggle === 'false' &&
                                <ul>
                                    <li><Link to="/Acmanager/thietlap">Thiết lập Tài Khoản</Link></li>
                                    <li><Link to="/Acmanager/diachi">Địa Chỉ</Link></li>
                                    <li><Link to="/" onClick={logGout}>Đăng xuất</Link></li>
                                </ul>
                            }
                            {
                                toggle === 'true' &&
                                <ul>
                                    <li> <Link to="/Acmanager/quanlysanpham">Quản lý sản phẩm</Link></li>
                                    <li><Link to="/Acmanager/themsanpham">Thêm sản phẩm</Link></li>
                                    <li> <Link to="/Acmanager/quanlydonhang">Quản lý đơn hàng</Link></li>
                                    <li> <Link to="/Acmanager/quanlynguoidung">Quản lý người dùng</Link></li>
                                    <li><Link to="/" onClick={logGout}>Đăng xuất</Link></li>
                                </ul>
                            }

                        </div>
                    </div>
                    <div className="col-sm-9">

                        {
                            toggle === 'false' &&
                            <Switch>
                                <Route path="/Acmanager/diachi" component={Diachi} />
                                <Route exact component={Thongtintaikhoan} />
                            </Switch>
                        }
                        {
                            toggle === 'true' &&
                            <Switch>
                                <Route path="/Acmanager/themsanpham" component={Upload} />
                                <Route path="/Acmanager/quanlydonhang" component={Donhang} />
                                <Route path="/Acmanager/quanlynguoidung" component={User} />
                                <Route exact component={Qanlysanpham} />
                            </Switch>
                        }

                    </div>
                </div>

            </div>
        </Router>
    )
}

export default Acmanager

