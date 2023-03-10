import React, { Component } from 'react'
import DanhSachSanPham from './DanhSachSanPham'
import Parent from './Parent'

export default class DemoProps extends Component {

    refParent = React.createRef();
    changeTitle = () => {
        this.refParent.current.changeTitle();
    }

    render() {

        return (
            <div>
                <button onClick={this.changeTitle}>Change Title</button>
                <Parent ref={this.refParent}>
                    123
                    <DanhSachSanPham />
                    <DanhSachSanPham />
                    <DanhSachSanPham />
                </Parent>
            </div>
        )
    }
}
