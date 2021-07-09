import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { Link } from 'react-router-dom';

function HomepageMenuSlide() {

    return (
        <div className="row px-3 HomepageMenuSlide">
            <div className="col-12 col-sm-3 homepage-left-menu pr-4">
                <nav className="navbar navbar-light bg-light px-0 py-0 h-100 w-100">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0 w-100 text-align-left h-100">
                        <li className="nav-item navbar-brand">
                            <a href="/" className="nav-link bg-info text-white">DANH MỤC SẢN PHẨM</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle text-dark" href="/" id="dropdownId" data-toggle="dropdown" role-supports-aria-props="true" aria-expanded="false">THỜI TRANG NỮ</a>
                            <div className="dropdown-menu dropdown-ul" aria-labelledby="dropdownId">
                                <Link className="dropdown-item" to={{
                                    pathname: '/CartegoryProducts/docongso',
                                    state: 'quần jean'
                                }}>
                                    ĐỒ CÔNG SỞ
                                </Link>
                                <Link className="dropdown-item" to={{
                                    pathname: '/CartegoryProducts/dam&vay',
                                    state: 'váy'
                                }}>
                                    ĐẦM/VÁY
                                </Link>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle text-dark" href="/" id="dropdownId" data-toggle="dropdown" role-supports-aria-props="true" aria-expanded="false">THỜI TRANG NAM</a>
                            <div className="dropdown-menu dropdown-ul" aria-labelledby="dropdownId">

                                <Link className="dropdown-item" to={{
                                    pathname: '/CartegoryProducts/aosomi',
                                    state: 'áo sơ mi'
                                }}>
                                    ÁO SƠ MI
                                </Link>
                                <Link className="dropdown-item" to={{
                                    pathname: '/CartegoryProducts/quanau',
                                    state: 'quần âu'
                                }}>
                                    QUẦN DÀI/QUẦN ÂU
                                </Link>

                            </div>
                        </li>
                        <li className="nav-item dropdown ">
                            <a className="nav-link dropdown-toggle text-dark" href="/" id="dropdownId" data-toggle="dropdown" role-supports-aria-props="true" aria-expanded="false">ĐỒ THỂ THAO</a>
                            <div className="dropdown-menu dropdown-ul" aria-labelledby="dropdownId">

                                <Link className="dropdown-item nav-link text-dark" to={{
                                    pathname: '/CartegoryProducts/tuidulich',
                                    state: 'túi du lịch'
                                }}>
                                    TÚI DU LỊCH
                                </Link>
                                <Link className="dropdown-item nav-link text-dark" to={{
                                    pathname: '/CartegoryProducts/giaythetao',
                                    state: 'giày thể thao'
                                }}>
                                    GIÀY THỂ THAO
                                </Link>

                            </div>
                        </li>
                        <li className="nav-item">
                            <Link className="dropdown-item nav-link text-dark" to={{
                                pathname: '/CartegoryProducts/me&be',
                                state: 'mẹ và bé'
                            }}>
                                MẸ&BÉ
                            </Link>

                        </li>
                        <li className="nav-item">
                            <Link className="dropdown-item nav-link text-dark" to={{
                                pathname: '/CartegoryProducts/giaynam',
                                state: 'giày nam'
                            }}>
                                GIÀY NAM
                            </Link>

                        </li>

                        <li className="nav-item">
                            <Link className="dropdown-item nav-link text-dark" to={{
                                pathname: '/CartegoryProducts/tuixach',
                                state: 'túi sách'
                            }}>
                                TÚI XÁCH
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="dropdown-item nav-link text-dark" to={{
                                pathname: '/CartegoryProducts/phukien',
                                state: 'phụ kiện'
                            }}>
                                PHỤ KIÊN
                            </Link>

                        </li>

                    </ul>
                </nav>
            </div>
            <div className="col-12 col-sm-9 homepage-left-menu">
                <Slide>
                    <div className="slider">
                        <img src="https://demo.fieldthemes.com/eagle/ps17/modules/revsliderprestashop/uploads/home%201/slider2-h1.jpg" alt="ảnh" />
                    </div>
                    <div className="slider">
                        <img src="https://demo.fieldthemes.com/eagle/ps17/modules/revsliderprestashop/uploads/home%201/slider1-h1.jpg" alt="ảnh" />
                    </div>
                    {/* <div style={{ height: 100 + "%", width: 100 + "%", backgroundColor: 'blue' }}>
                        <img src="https://demo.fieldthemes.com/eagle/ps17/modules/revsliderprestashop/uploads/home%201/slider2-h1.jpg" alr="ảnh" />
                    </div>
                    <div style={{ height: 100 + "%", width: 100 + "%", backgroundColor: 'blue' }}>
                        <img src="https://demo.fieldthemes.com/eagle/ps17/modules/revsliderprestashop/uploads/home%201/slider2-h1.jpg" alr="ảnh" />
                    </div> */}
                </Slide>
            </div>
        </div >
    )
}

export default HomepageMenuSlide

