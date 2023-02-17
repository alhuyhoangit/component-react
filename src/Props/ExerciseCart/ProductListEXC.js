import React, { Component } from 'react'
import sanPham from '../../Data/dataPhone.json'
import ProductItemEXC from './ProductItemEXC';

export default class ProductListEXC extends Component {
  mangSanPham = sanPham;

  renderSanPham = () => {
    return this.mangSanPham.map((item, index) => {
      return <div className="col-3 text-center" key={index}>
        <ProductItemEXC themGioHang={this.props.themGioHang} sanPhamProp={item} />
      </div>
    })
  }
  render() {
    return (
      <div className='container'>

        <div className="row">
          {this.renderSanPham()}
        </div>
      </div>
    )
  }
}
