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
        })
    }
    const handleback = () => {
        props.handleupload();
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
        <div >
            <h2>ĐĂNG SẢN PHẨM</h2>
            <form className="account_box">
                <input type="text" name="name" value={body.name} placeholder="tên sản phẩm" onChange={onchange} />
                <input type="text" name="description" value={body.description} placeholder="mô tả" onChange={onchange} />

                <input type="text" name="category" value={body.category} placeholder="danh mục sản phẩm" onChange={onchange} />

                <input type="number" name="price" value={body.price} placeholder="nhập giá" onChange={onchange} />

                <input type="number" name="sale" value={body.sale} placeholder="giảm giá" onChange={onchange} />

                <input type="file" name="file"
                    onChange={
                        event => {
                            const file = event.target.files[0];
                            setfile(file);
                        }
                    }

                />
                <button style={{ backgroundColor: "rgb(250, 70, 25)" }} onClick={send}>Gửi</button>
                <p className="text-primary" style={{ cursor: "pointer" }} onClick={handleback}>Quay lại</p>
            </form>

        </div>
    );
}

export default Upload;