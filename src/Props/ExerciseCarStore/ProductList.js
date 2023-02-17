import React, { Component } from 'react'
import Product from './Product';

export default class ProductList extends Component {

    renderCar = () => {
        return this.props.dataCar.map((item, index) => {
            return <div className="col-3" key={index}>
                <Product sanPham={item} xemChiTiet={this.props.xemChiTiet} />
            </div>
        })
    }
    render() {
        return (
            <div className='row'>
                {this.renderCar()}
            </div>
        )
    }
}
