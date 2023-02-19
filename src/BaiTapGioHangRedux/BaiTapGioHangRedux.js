import React, { Component } from 'react'
import GioHangRedux from './GioHangRedux'
import ProductListRedux from './ProductListRedux'

//import thư viện connect
import { connect } from 'react-redux'

class BaiTapGioHangRedux extends Component {

    renderSoLuong = () => {
        return this.props.gioHang.reduce((tongSoLuong, sanPham, index) => {
            return tongSoLuong += sanPham.soLuong
        }, 0)
    }

    render() {

        return (
            <div className='container'>
                <h3>DANH SÁCH SẢN PHẨM</h3>
                <div className='text-right display-5'>
                    <a className='text-info' data-toggle='modal' data-target='#idModalPhoneRedux' style={{ cursor: 'pointer' }}>
                        <i className="fa fa-cart-plus"></i>(<span className='text-danger'>{this.renderSoLuong()}</span>) Giỏ hàng</a>
                </div>
                <ProductListRedux />
                <GioHangRedux />
            </div>
        )
    }
}

//Viết hàm lấy giá trị state từ redux store về biến thành props component
const mapStateToProps = (state) => {
    return {
        gioHang: state.stateGioHang.gioHang
    }
}

export default connect(mapStateToProps)(BaiTapGioHangRedux)
