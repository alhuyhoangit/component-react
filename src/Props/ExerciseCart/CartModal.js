import React, { Component } from 'react'

export default class CartModal extends Component {

  renderGioHang = () => {
    let { gioHang } = this.props;
    return gioHang.map((spGioHang, index) => {
      return <tr key={index}>
        <td>{spGioHang.maSP}</td>
        <td><img style={{ width: '35px', height: '35px' }} src={spGioHang.hinhAnh} alt={index} /></td>
        <td>{spGioHang.tenSP}</td>
        <td>{spGioHang.soLuong}</td>
        <td>{spGioHang.donGia.toLocaleString()}</td>
        <td>{(spGioHang.donGia * spGioHang.soLuong).toLocaleString()}</td>
        <td><button onClick={() => { this.props.xoaGioHang(spGioHang.maSP) }} className='btn btn-danger'>Xoá</button></td>
      </tr>
    })
  }

  render() {
    let gioHang = this.props;
    return (
      <div>
        <div className="modal fade" id="idModalPhone" tabIndex={-1}>
          <div style={{ minWidth: '1000px' }} className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Giỏ Hàng</h5>
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
                    {this.renderGioHang()}
                  </tbody>
                </table>
              </div>
              <h3 className='text-center text-info text-weight-bold'>Tổng tiền: <span className='text-danger'>{this.props.tinhTongTien()} VND</span></h3>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
