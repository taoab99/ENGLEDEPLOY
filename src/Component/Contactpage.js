import React from 'react'

function Contactpage() {
    return (
        <div className="container-fluid py-5 container-padding">
            <div className="row">
                <div className="col-12 col-sm-6 contac">
                    <div className="contact-title">
                        <h2>LIÊN HỆ</h2>
                    </div>
                    <div className="contac-text">
                        <p>
                            Để phục vụ khác hàng tốt hơn chúng tôi rất mong những ý kiến đóng góp về sản phẩm cũng như sự hài lòng của quý khách về shop chúng tôi .Hãy để lại cho chúng tôi biết ý kiến của bạn trong biểu mẫu trên !
                        </p>
                    </div>
                    <div className="contact-info">
                        <div>
                            <div className="contact-i">
                                <i className="fas fa-home"></i>
                            </div>
                            <div className="contact-a">
                                <p>Eagle Store</p>
                                <p>United States</p>
                            </div>
                        </div>
                        <div>
                            <div className="contact-i">
                                <i className="fas fa-phone-volume"></i>
                            </div>
                            <div className="contact-a">
                                <p>0969132896</p>
                            </div>
                        </div>
                        <div>
                            <div className="contact-i">
                                <i className="fas fa-envelope"></i>
                            </div>
                            <div className="contact-a">
                                <a href="/"> khactao99@gmail.com</a>
                            </div>
                        </div>
                    </div>


                </div>

                <div className="col-12 col-sm-6">
                    <div className="contact-title">
                        <h2>PHẢN HỒI GÓP Ý</h2>
                    </div>
                    <div className="contact-group-input pt-2">
                        <div className="contac-input py-3">
                            <input type="select" ></input>
                            <input type="text" placeholder="Email"></input>
                        </div>
                        <div className="contact-send">
                            <textarea className="w-100 text-area" name="message" row="10" cols="50"></textarea>
                        </div>
                        <button className="bg-dark text-white contact-button">GỬI ĐI</button>
                    </div>


                </div>
            </div>

        </div>
    )
}

export default Contactpage

