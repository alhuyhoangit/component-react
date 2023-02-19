import React, { Component } from "react";
import { connect } from "react-redux";

class ProductItemRedux extends Component {
    render() {
        let { product } = this.props;
        return (
            <div className="card text-left">
                <img
                    style={{ width: 350, height: 350 }}
                    className="card-img-top"
                    src={product.hinhAnh}
                    alt={product.hinhAnh}
                />
                <div className="card-body">
                    <h4 className="card-title">{product.tenSP}</h4>
                    <p className="card-text">{product.giaBan.toLocaleString()}</p>
                    <button onClick={() => { this.props.themGioHang(product) }} className="btn btn-success">
                        Thêm sản phẩm
                    </button>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        themGioHang: (sanPham) => {
            // Tạo ra một sản phẩm giỏ hàng
            let spGioHang = {
                maSP: sanPham.maSP,
                tenSP: sanPham.tenSP,
                hinhAnh: sanPham.hinhAnh,
                soLuong: 1,
                gia: sanPham.giaBan,
            };
            //console.log('spGioHang', spGioHang);
            //Tạo ra action
            let action = {
                type: 'THEM_GIO_HANG', //thuộc tính bắt buộc của action
                spGioHang
            }

            //Dùng hàm dispatch từ Redux => gửi dữ liệu lên producer
            dispatch(action);
        },
    };
};

export default connect(null, mapDispatchToProps)(ProductItemRedux);
