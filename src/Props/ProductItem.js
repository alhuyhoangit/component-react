import React, { Component } from 'react'

export default class ProductItem extends Component {
    render() {
        return (
            <div style={{ width: '300px' }} className="card text-left">
                <img className="card-img-top" src={this.props.dataProductItem.image} alt={this.props.dataProductItem.name} />
                <div className="card-body">
                    <h4 className="card-title">{this.props.dataProductItem.name}</h4>
                    <p className="card-text">$ {this.props.dataProductItem.price}</p>
                    <button className='w3-button w3-black'><i class="fa fa-cart-plus"></i> Add to cart...</button>
                </div>
            </div>
        )
    }
}
