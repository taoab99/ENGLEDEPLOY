import React from 'react';

function Footer() {

    return (
        <div className="container-fluid footer text-white">
            <div className="row footer-padding">
                <div className=" col-6 col-sm-6 col-lg-4 padding-col-footer">
                    <div className="footer-col1">
                        <img src="https://demo.fieldthemes.com/eagle/ps17/img/eagle-store-logo-1609387546.jpg" alt="anh" style={{ width: 158, height: 66 }} />
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing, sed do eiusmod tempor incididunt ut labore et. Lorem ipsum dolor sit amet, consectetur adipiscing.Lorem ipsum dolor sit amet, consectetur
                        </p>
                    </div>
                    <div className="footer-col-info padding-col-footer">
                        <i className="fab fa-facebook-square border-cricle-info "></i>
                        <i className="fab fa-instagram border-cricle-info"></i>
                        <i className="fab fa-twitter border-cricle-info"></i>
                        <i className="fab fa-google-plus-g border-cricle-info"></i>
                    </div>
                </div>
                <div className=" col-6 col-sm-6 col-lg-2 padding-col-footer">
                    <h3 className="h3-font">KHÁCH HÀNG</h3>
                    <ul className="footer-ul">
                        <li><a href="/ACCOUNT">Tài khoản</a></li>
                        <li><a href="/">Đơn hàng đã mua</a></li>
                        <li><a href="/">Thẻ tín dụng</a></li>
                        <li><a href="/Acmanager/diachi">Địa chỉ giao hàng</a></li>
                        <li><a href="/">Thông tin cá nhân</a></li>
                        <li><a href="/">Đăng nhập</a></li>
                    </ul>
                </div>
                <div className=" col-6 col-sm-6 col-lg-2 padding-col-footer">
                    <h3 className="h3-font">THÔNG TIN LIÊN HỆ</h3>
                    <ul className="footer-ul">
                        <li><a href="/CART">giỏ hàng</a></li>
                        <li><a href="/">Sản phẩm mới</a></li>
                        <li><a href="/">Bán chạy nhất</a></li>
                        <li><a href="/">liên kết</a></li>
                        <li><a href="/">sử dụng</a></li>
                        <li><a href="/">giảm giá</a></li>
                    </ul>
                </div>
                <div className=" col-6 col-sm-6 col-lg-4 footer-colend padding-col-footer">
                    <div>
                        <h3 className="h3-font">CỬA HÀNG</h3>
                        <p><i className="fas fa-map-marker-alt"></i>160 XUÂN THỦY-CẦU GIẤY-HÀ NỘI </p>
                        <p><i className="fas fa-phone-alt"></i> Liên hệ trực tuyến:0969132896</p>
                        <p><i className="fas fa-envelope"></i>Email: <a href="/">khactao99@gmail.com</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer

