import React, { Component } from 'react'

export default class SanPham extends Component {
    render() {
        let sanPhamProp = this.props.sanPhamProp;
        return (

            <div className="card text-left" >
                <img style={{ width: 250, height: 250 }} className="card-img-top" src={sanPhamProp.hinhAnh} alt={sanPhamProp.maSP} />
                <div className="card-body">
                    <h4 className="card-title">{sanPhamProp.tenSP}</h4>
                    <p className="card-text">{sanPhamProp.giaBan.toLocaleString()}</p>
                    <button onClick={() => { this.props.xemChiTietProp(sanPhamProp) }} className='btn btn-info mx-auto d-block'>Xem chi tiết...</button>
                </div>
            </div>

        )
    }
}
