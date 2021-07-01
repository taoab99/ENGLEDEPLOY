import React from 'react'
import MenuList from './MenuList';
function Headerpage() {
  return (
    <div className="container-full bg-info" >
      <div className="row py-3 mx-0 container-padding">
        <div className="col-12 col-sm-4 col-lg-4 header-logo">
          <img style={{ width: 158 + 'px', height: 66 + "px" }} src="https://demo.fieldthemes.com/eagle/ps17/img/eagle-store-logo-1609387546.jpg" alt="ảnh"></img>
        </div>
        <div className="col-12 col-sm-8 col-lg-8">
          <MenuList />
        </div>
      </div>
    </div>
  )
}

export default Headerpage

