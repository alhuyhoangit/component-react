import React from 'react'

export default function ChildFunctional(props) {

    let { src, name, price } = props.productItem;

    return (
        <div>
            <img style={{ width: 250 }} src={src} />
            <div style={{ width: 200 }} className="card text-left">
                <img className="card-img-top" src={src} alt='product' />
                <div className="card-body">
                    <h4 className="card-title">{name}</h4>
                    <p className="card-text">{price} VNĐ</p>
                </div>
            </div>
        </div>
    )
}
