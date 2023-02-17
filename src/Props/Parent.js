import React, { Component } from 'react'
import Child from './Child'
import ChildFunctional from './ChildFunctional';

export default class Parent extends Component {

    product = {
        id: 1,
        name: 'Nho đỏ không hạt',
        src: "https://salt.tikicdn.com/cache/750x750/ts/product/5a/bf/21/48b5806b495411b090762f227230f90d.jpg.webp",
        price: 70000,
        desc: 'Nho Ninh Thuận chất lượng, không thuốc trừ sâu...',
        size: [36, 37, 38, 39, 40]
    }

    size = [36, 37, 38, 39, 40];

    state = {
        title: 'Huy Hoang'
    }

    showInfo = (name) => {
        alert(name)
    }

    changeTitle = () => {
        this.setState({
            title: 'Pham'
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
                
                <h3>Danh Sách Sản Phẩm</h3>
                {this.props.children.map((component, index) => {
                    return component;
                })}
            </div>
        )
    }
}
