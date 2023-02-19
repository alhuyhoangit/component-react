import React, { Component } from 'react'
import arrProduct from '../Data/dataPhone.json'
import ProductItemRedux from './ProductItemRedux';

export default class ProductListRedux extends Component {
    mangSanPham = arrProduct;
    renderProductItem = () => {
        return this.mangSanPham.map((sanPham, index) => {
            return <div className='col-4' key={index}>
                <ProductItemRedux product={sanPham} />
            </div>
        })
    }
    render() {
        return (
            <div className='row'>
                {this.renderProductItem()}
            </div>
        )
    }
}
