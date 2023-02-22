import React, { Component } from 'react'
import './BaiTapGameXucXac.css'
import ThongTinTroChoi from './ThongTinTroChoi'
import XucXac from './XucXac'
import { connect } from 'react-redux'

class BaiTapGameXucXac extends Component {
    render() {
        return (
            <div className='game'>
                <div className="title-game text-center mt-5 display-4">
                    Bài tập game xúc xắc
                </div>
                <div className="row text-center mt-5">
                    <div className="col-5">
                        <button onClick={() => {
                            this.props.datCuoc(true)
                        }} className='btnGame'>TÀI</button>
                    </div>
                    <div className="col-2">
                        <XucXac />
                    </div>
                    <div className="col-5">
                        <button onClick={() => {
                            this.props.datCuoc(false)
                        }} className='btnGame'>XỈU</button>
                    </div>
                </div>
                <div className="text-center thongTinTroChoi">
                    <ThongTinTroChoi />
                    <button onClick={() => { this.props.playGame() }} className='btn btn-success display-2 p-2 mt-5'>Play game</button>

                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        datCuoc: (taiXiu) => {
            //Tạo action taiXiu
            let action = {
                type: 'DAT_CUOC',
                taiXiu
            }
            dispatch(action)
        },
        playGame: () => {
            let action = {
                type: 'PLAY_GAME'
            }
            dispatch(action)
        }
    }
}

export default connect(null, mapDispatchToProps)(BaiTapGameXucXac)
