import React, { Component } from 'react'
import dataCar from '../../Data/dataCar.json'
import Modal from './Modal';
import ProductList from './ProductList'

export default class ExerciseCarStore extends Component {
    mangSP = dataCar;
    state = {
        newProduct: dataCar[0]
    }

    xemChiTiet = (item) => {
        this.setState({
            newProduct: item
        })
    }

    render() {
        return (
            <div className='container'>
                {/* <DanhSachSanPham /> */}
                <h3>DANH SÁCH XE</h3>
                <ProductList dataCar={this.mangSP} xemChiTiet={this.xemChiTiet} />
                <Modal newProduct={this.state.newProduct} />
            </div>
        )
    }
}
