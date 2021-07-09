import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'
import Call from './CallAPI/Call';
import * as action from './Action/index';

function Qanlysanpham(props) {

    const [sanpham, setsanpham] = useState(null);
    const dispatch = useDispatch();
    useEffect(async () => {
        await Call('products/index', 'GET', null)
            .then(res => {
                setsanpham(res.data);
            })
    }, []);

    const deleteap = (id) => {
        console.log(id);
        dispatch(action.asyncdeletesp(id));
    }
    const loadsp = (arrsp) => {
        if (arrsp) {
            var result = arrsp.map((item, index) => {
                return (
                    <tr className="quanlysp_tr" key={index}>
                        <td style={{ width: "100px", padding: '0px' }}>
                            <img src={item.url} alt={item.name} />
                        </td>
                        <td>
                            {item.name}
                        </td>
                        <td>
                            {item.description}
                        </td>
                        <td>
                            {item.price}
                        </td>
                        <td>
                            {item.sale}%
                        </td>
                        <td>
                            {item.category}
                        </td>
                        <td className="quanlysp_tr_tdflex">
                            <button onClick={() => deleteap(item._id)} className="btn btn_hover">Xóa</button>
                        </td>
                    </tr>
                )
            })
        }
        return result;
    }
    return (
        <div className="quanlysp">
            <div className="hoso">
                <h1>Sản phẩm</h1>
            </div>
            {
                sanpham === null &&
                <div>loadding...</div>
            }
            {
                sanpham !== null &&
                <table className="table table-bordered ">
                    <thead>
                        <tr>
                            <th>Ảnh</th>
                            <th>Tên sảm phẩm</th>
                            <th>Mô tả</th>
                            <th>Giá bán</th>
                            <th>Giảm giá</th>
                            <th>Phân loại</th>
                            <th>{sanpham.length}sp</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            loadsp(sanpham)
                        }
                    </tbody>
                </table>

            }
        </div>
    )
}



export default Qanlysanpham;

