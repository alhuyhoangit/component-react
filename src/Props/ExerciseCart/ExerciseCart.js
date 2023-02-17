import React, { Component } from 'react'
import CartModal from './CartModal'
import ProductListEXC from './ProductListEXC'

export default class ExerciseCart extends Component {

  state = {
    gioHang: [],
  }

  tinhTongSoLuong = () => {
    return this.state.gioHang.reduce((tongSoLuong, spGioHang, index) => { return tongSoLuong += spGioHang.soLuong }, 0).toLocaleString();
  }

  tinhTongTien = () => {
    return this.state.gioHang.reduce((tongThanhTien, spGioHang, index) => { return tongThanhTien += spGioHang.soLuong * spGioHang.donGia }, 0).toLocaleString();
  }

  xoaGioHang = (maSP) => {
    let gioHangMoi = this.state.gioHang.filter((item) => { return item.maSP !== maSP });
    this.setState({
      gioHang: gioHangMoi
    })
  }

  themGioHang = (sanPham) => {
    let spGioHang = {
      maSP: sanPham.maSP,
      tenSP: sanPham.tenSP,
      donGia: sanPham.giaBan,
      soLuong: 1,
      hinhAnh: sanPham.hinhAnh
    }
    //Tim san pham da co trong gio hang chua
    let index = this.state.gioHang.findIndex(spGH => spGH.maSP === spGioHang.maSP);
    if (index !== -1) {
      this.state.gioHang[index].soLuong += 1;

    } else {
      this.state.gioHang.push(spGioHang)
    }
    let gioHangCapNhat = [...this.state.gioHang]
    this.setState({
      gioHang: gioHangCapNhat
    })

  }

  render() {
    return (
      <div className='container-fluid'>
        <h3 className='text-center'>BÀI TẬP GIỎ HÀNG</h3>
        <div className='text-right display-5'>
          <a className='text-info' data-toggle='modal' data-target='#idModalPhone' style={{ cursor: 'pointer' }}>
            <i className="fa fa-cart-plus"></i>(<span className='text-danger'>{this.tinhTongSoLuong()}</span>) Giỏ hàng</a>
        </div>
        <CartModal tinhTongTien={this.tinhTongTien} xoaGioHang={this.xoaGioHang} gioHang={this.state.gioHang} />
        <ProductListEXC themGioHang={this.themGioHang} />
      </div>
    )
  }
}
