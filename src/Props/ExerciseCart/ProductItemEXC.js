import React, { Component } from 'react'


export default class ProductItemEXC extends Component {
  render() {
    let { sanPhamProp } = this.props;
    return (
      <div className="card text-left">
        <img style={{ width: 250, height: 250 }} className="card-img-top" src={sanPhamProp.hinhAnh} alt={sanPhamProp.hinhAnh} />
        <div className="card-body">
          <h4 className="card-title">{sanPhamProp.tenSP}</h4>
          <p className="card-text">VND {sanPhamProp.giaBan.toLocaleString()}</p>
          <button className='btn btn-success' onClick={() => { this.props.themGioHang(sanPhamProp) }}>Add to cart</button>
        </div>
      </div>

    )
  }
}
