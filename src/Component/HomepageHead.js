import React from 'react'

function HomepageHead(props) {
    return (
        <div className="row">

            <div className="col-12 col-sm-12 col-lg-4 elementor-widget py-2">
                <div className="container-fluid element-widget-box">
                    <div className="widget-icon col-2">
                        <i className="fas fa-truck"></i>
                    </div>
                    <div className="widget-title col-10">
                        <h6 className="p-0 m-0">GIAO HÀNG</h6>
                        <p className="p-0 m-0">Miễn phí vận chuyển cho tất cả đơn trên 200k</p>
                    </div>
                </div>
            </div>

            <div className="col-12 col-sm-12 col-lg-4 elementor-widget py-2">
                <div className="container-fluid element-widget-box">
                    <div className="widget-icon col-2">
                        <i className="fas fa-heart"></i>
                    </div>
                    <div className="widget-title col-10">
                        <h6 className="p-0 m-0">HỖ TRỢ  24/7</h6>
                        <p className="p-0 m-0">Liên hệ trực tiếp để được tư vấn </p>
                    </div>
                </div>
            </div>

            <div className="col-12 col-sm-12 col-lg-4 elementor-widget py-2">
                <div className="container-fluid element-widget-box">
                    <div className="widget-icon col-2">
                        <i className="fas fa-phone-alt"></i>
                    </div>
                    <div className="widget-title col-10">
                        <h6 className="p-0 m-0">HOTLINE HỎI ĐÁP</h6>
                        <p className="p-0 m-0">0969132896</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default HomepageHead

