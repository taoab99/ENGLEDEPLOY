import React, { useEffect } from 'react';
import * as actions from './Action/index';
import {
  Link
} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';


// ham chạy show sản phẩm:
var showproducts = (products) => {
  var result = "";
  if (products) {
    result = products.map((item, index) => {
      return (
        <div className="col-6 col-sm-3 py-2" key={index}>
          <div className="card">
            <div className="card-body p-0">
              <div className="card-image">
                <img src={item.url} alt={item.name} />
              </div>
              <div className="card-title">
                <h6> {item.name} </h6>
                <p>{item.price}đ</p>
              </div>
              <div className="card-boton">
                <Link to={{
                  pathname: `/ProductsDipcription/${item.name}`,
                  state: {
                    item: item
                  }
                }}>
                  <input className="bg-info" type="submit" value="Chi tiết sản phẩm" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };
  return result;
}

// hàm chính :


function Products(props) {
  const { enpont } = props
  const products = useSelector(state => state.state);
  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(actions.goi(enpont));

  }, [enpont])
  return (
    <div className="row py-5">

      {
        showproducts(products)
      }

    </div>
  )
}

export default Products

