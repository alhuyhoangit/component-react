import React, { Component } from 'react'
import DemoProps from './Props/DemoProps'
import ProductList from './Props/ProductList'
import dataJson from './Data/data.json'
import DanhSachSanPham from './Props/DanhSachSanPham'
import ExerciseCarStore from './Props/ExerciseCarStore/ExerciseCarStore'
import ExerciseCart from './Props/ExerciseCart/ExerciseCart'
import BaiTapGioHangRedux from './BaiTapGioHangRedux/BaiTapGioHangRedux'


export default class App extends Component {
  render() {
    return (
      // <div className='container-fluid'>
      //   <div className="row">
      //     <div className="col-4">
      //       <div style={{ minHeight: 800 }} className="nav flex-column nav-pills justify-content-center" id="v-pills-tab" role="tablist" aria-orientation="vertical">
      //         <button className="nav-link active" id="home-tab" data-toggle="pill" data-target="#home" type="button" role="tab">Home</button>
      //         <button className="nav-link" id="shop-tab" data-toggle="pill" data-target="#shop" type="button" role="tab">Shop</button>
      //       </div>

      //     </div>
      //     <div className="col-8 productList">
      //       <div className="tab-content" id="v-pills-tabContent">
      //         <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="v-pills-home-tab">
      //           <ProductList arrProduct={dataJson} />
      //         </div>
      //         <div className="tab-pane fade" id="shop" role="tabpanel" aria-labelledby="v-pills-profile-tab">
      //           Shop
      //         </div>
      //       </div>

      //     </div>
      //   </div>


      // </div>
      <div>
        {/* <ExerciseCarStore /> */}
        {/* <DemoProps/> */}
        {/* <ExerciseCart /> */}
        <BaiTapGioHangRedux />
      </div>
    )
  }
}
