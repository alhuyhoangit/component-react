import React, { Component } from 'react'
import dataPhone from '../Data/dataPhone.json'
import SanPham from './SanPham';

export default class DanhSachSanPham extends Component {
    mangSanPham = dataPhone;
    state = {
        sanPhamChiTiet: this.mangSanPham[0]
    }
    renderSanPham = () => {
        return this.mangSanPham.map((item, index) => {
            return <div className="col-3 text-center" key={index}>
                <SanPham xemChiTietProp={this.xemChiTiet} sanPhamProp={item} />
            </div>

        })
    }

    xemChiTiet = (sanPham) => {
        this.setState({
            sanPhamChiTiet: sanPham
        })
    }
    render() {
        return (
            <div className='container'>
                <h3 className='display-4 text-center'>DANH SÁCH SẢN PHẨM</h3>
                <div className="row">
                    {this.renderSanPham()}
                </div>
                <div className="row">
                    <div className="col-4">
                        <h3>{this.state.sanPhamChiTiet.tenSP}</h3>
                        <img style={{ width: '100%' }} src={this.state.sanPhamChiTiet.hinhAnh} alt={this.state.sanPhamChiTiet.maSP} />
                    </div>
                    <div className="col-8">
                        <h3>Thông số kỹ thuật</h3>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>Màn hình</th>
                                    <th>{this.state.sanPhamChiTiet.manHinh}</th>
                                </tr>
                                <tr>
                                    <th>Hệ điều hành</th>
                                    <th>{this.state.sanPhamChiTiet.heDieuHanh}</th>
                                </tr>
                                <tr>
                                    <th>Camera trước</th>
                                    <th>{this.state.sanPhamChiTiet.cameraTruoc}</th>
                                </tr>
                                <tr>
                                    <th>Camera sau</th>
                                    <th>{this.state.sanPhamChiTiet.cameraSau}</th>
                                </tr>
                                <tr>
                                    <th>RAM</th>
                                    <th>{this.state.sanPhamChiTiet.ram}</th>
                                </tr>
                                <tr>
                                    <th>ROM</th>
                                    <th>{this.state.sanPhamChiTiet.rom}</th>
                                </tr>
                            </thead>

                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
