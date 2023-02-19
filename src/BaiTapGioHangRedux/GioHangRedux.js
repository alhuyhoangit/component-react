import React, { Component } from 'react'
//Sử dụng thư viện connect để lấy dữ liệu từ store về
import { connect } from 'react-redux';
import BaiTapGioHangReducer from '../redux/BaiTapGioHangReducer';

class GioHangRedux extends Component {
    render() {
        return (
            <div>
                {/* Modal */}
                <div className="modal fade" id="idModalPhoneRedux" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                    <div style={{ minWidth: '1000px' }} className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Giỏ hàng</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Mã SP</th>
                                            <th>Hình ảnh</th>
                                            <th>Tên SP</th>
                                            <th>Số lượng</th>
                                            <th>Đơn giá</th>
                                            <th>Thành tiền</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.props.gioHang.map((spGH, index) => {
                                            return <tr key={index}>
                                                <td>{spGH.maSP}</td>
                                                <td><img style={{ width: '35px', height: '35px' }} src={spGH.hinhAnh} alt={index} /></td>
                                                <td>{spGH.tenSP}</td>
                                                <td>
                                                    <button className='btn btn-info' onClick={() => { this.props.tangGiamSoLuong(spGH.maSP, false) }}>-</button>
                                                    {spGH.soLuong}
                                                    <button className='btn btn-info' onClick={() => { this.props.tangGiamSoLuong(spGH.maSP, true) }}>+</button>
                                                </td>
                                                <td>{spGH.gia.toLocaleString()}</td>
                                                <td>{(spGH.gia * spGH.soLuong).toLocaleString()}</td>
                                                <td><button onClick={() => { this.props.xoaGioHang(spGH.maSP) }} className='btn btn-danger'>Xoá</button></td>
                                            </tr>
                                        })}
                                    </tbody>
                                    <tfoot>
                                        <th colSpan={5}></th>
                                        <th>Tổng tiền: </th>
                                        <th>VND {this.props.gioHang.reduce((tongTien, spGioHang, index) => {
                                            return tongTien += spGioHang.soLuong * spGioHang.gia;
                                        }, 0).toLocaleString()}</th>
                                    </tfoot>
                                </table>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
// Hàm lấy state redux biến đổi thành props của component
const mapStateToProps = (state) => { // state là state tổng của ứng dụng chứa các state con (rootReducer)
    return {
        gioHang: state.stateGioHang.gioHang
    }
}
// Hàm đưa dữ liệu lên reducer
const mapDispatchToProps = (dispatch) => {
    return {
        xoaGioHang: (maSP) => {
            let action = {
                type: 'XOA_GIO_HANG',
                maSP
            };
            dispatch(action)
        },
        tangGiamSoLuong: (maSP, tangGiam) => { //tangGiam la true hoac false
            let action = {
                type: 'TANG_GIAM_SO_LUONG',
                maSP,
                tangGiam
            }
            dispatch(action)
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(GioHangRedux)
