import React, { Component } from 'react'

export default class Product extends Component {


    render() {
        let sanPhamProp = this.props.sanPham;
        return (

            <div className="card text-left">
                <img className="card-img-top" src={sanPhamProp.img} alt={sanPhamProp.id} />
                <div className="card-body">
                    <h4 className="card-title">{sanPhamProp.name}</h4>
                    <p className="card-text">$ {sanPhamProp.price.toLocaleString()}</p>
                    <button onClick={() => { this.props.xemChiTiet(sanPhamProp) }} type="button" className="btn btn-info" data-toggle="modal" data-target="#idModal">Xem chi tiết...</button>
                </div>
            </div>


        )
    }
}
