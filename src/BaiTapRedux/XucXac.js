import React, { Component } from 'react'

import { connect } from 'react-redux'

class XucXac extends Component {
    renderXucXac = () => { //Lấy props từ reducer
        return this.props.mangXucXac.map((xucXac, index) => {
            return <img key={index} style={{ width: 35 }} className='ml-2' src={xucXac.hinhAnh} alt={xucXac.ma} />
        })
    }
    render() {
        return (
            <div>
                {this.renderXucXac()}
            </div>
        )
    }
}

//hàm lấy state từ redux về thành props của component
const mapStateToProps = state => {
    return {
        mangXucXac: state.BaiTapGameXucXacReducer.mangXucXac
    }
}

export default connect(mapStateToProps)(XucXac)