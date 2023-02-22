import React, { Component } from 'react'
import DemoProps from './Props/DemoProps'
import ProductList from './Props/ProductList'
import dataJson from './Data/data.json'
import DanhSachSanPham from './Props/DanhSachSanPham'
import ExerciseCarStore from './Props/ExerciseCarStore/ExerciseCarStore'
import ExerciseCart from './Props/ExerciseCart/ExerciseCart'
import BaiTapGioHangRedux from './BaiTapGioHangRedux/BaiTapGioHangRedux'
import BaiTapGameXucXac from './BaiTapRedux/BaiTapGameXucXac'


export default class App extends Component {
  render() {
    return (
      <div>
        {/* <ExerciseCarStore /> */}
        {/* <DemoProps/> */}
        {/* <ExerciseCart /> */}
        {/* <BaiTapGioHangRedux /> */}
        <BaiTapGameXucXac />
      </div>
    )
  }
}
