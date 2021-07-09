import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';


function Upload(props) {
    const acc = useSelector(state => state.AccountLoggin)
    const [body, setbody] = useState({
        name: '',
        description: '',
        category: '',
        sale: 0,
        price: 0
    })
    const [file, setfile] = useState();
    const send = async event => {
        var data = new FormData();
        data.append('email', acc);
        data.append('file', file);
        data.append('name', body.name);
        data.append('description', body.description);
        data.append('category', body.category);
        data.append('price', body.price);
        data.append('sale', body.sale);
        event.preventDefault();

        await axios.post('https://engleshopnodejs.herokuapp.com/products/create', data)
            .then(res => alert(res.data.message))
            .catch(err => console.log(err));

        setbody({
            name: '',
            description: '',
            category: '',
            sale: 0,
            price: 0
        });

    }
    const onchange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setbody({
            ...body,
            [name]: value
        }

        )

    }
    return (
        <div className="thongtindangnhap">
            <div className="hoso">
                <h1 style={{ fontSize: "19px", textAlign: "left" }}>Thêm Sản phẩm</h1>
            </div>
            <div className="pt-5">
                <form>
                    <div className="form-group row">
                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Tên sản phẩm</label>
                        <div className="col-sm-10">
                            <input type="text" name="name" onChange={onchange} value={body.name} className="form-control" id="inputEmail3" placeholder="Tên sản phẩm" />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Mô tả sản phẩm</label>
                        <div className="col-sm-10">
                            <input type="text" name="description" onChange={onchange} value={body.description} className="form-control" id="inputPassword3" placeholder="Mô tả sản phẩm" />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Danh mục sản phẩm</label>
                        <div className="col-sm-10">
                            <input type="text" name="category" onChange={onchange} value={body.category} className="form-control" id="inputPassword3" placeholder="danh mục sản phẩm" />
                        </div>
                    </div>


                    <div className="form-group row">
                        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Giá bán</label>
                        <div className="col-sm-10">
                            <input type="number" name="price" onChange={onchange} value={body.price} className="form-control" id="inputPassword3" placeholder="nhập giá" />
                        </div>
                    </div>


                    <div className="form-group row">
                        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Giảm giá</label>
                        <div className="col-sm-10">
                            <input type="number" name="sale" onChange={onchange} value={body.sale} className="form-control" id="inputPassword3" placeholder="nhập phần trăm giảm giá" />
                        </div>
                    </div>


                    <div className="form-group row">
                        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Chọn ảnh tải lên</label>
                        <div className="col-sm-10">
                            <input type="file" name="file"
                                onChange={
                                    event => {
                                        const file = event.target.files[0];
                                        setfile(file);
                                    }
                                }
                                className="form-control" id="inputPassword3" placeholder="tải ảnh lên" />
                        </div>
                    </div>

                    <div className="form-group row">
                        <div className="col-sm-10">
                            <button type="submit" className="btn btn-primary"
                                onClick={send}>Sign in</ button>
                        </div>
                    </div>
                </form>
            </div>

        </div>
    );
}

export default Upload;