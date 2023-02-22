const stateDefault = {
    taiXiu: true, // True là tài(từ 3-11), False là xỉu(từ 12 trở lên)
    mangXucXac: [
        { ma: 1, hinhAnh: './img/gameXucXac/1.png' },
        { ma: 1, hinhAnh: './img/gameXucXac/1.png' },
        { ma: 1, hinhAnh: './img/gameXucXac/1.png' }
    ],
    soBanThang: 0,
    tongSoBanChoi: 0,
    tongSoDiem: 0,
    ketQua: 'None'
}

const BaiTapGameXucXacReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'DAT_CUOC': {
            state.taiXiu = action.taiXiu;
            return { ...state }
        }; break;
        case 'PLAY_GAME': {
            let mangXucXacNgauNhien = [];
            for (let i = 0; i < 3; i++) {
                let soNgauNhien = Math.floor(Math.random() * 6) + 1;
                let xucXacNgauNhien = { ma: soNgauNhien, hinhAnh: `./img/gameXucXac/${soNgauNhien}.png` };
                mangXucXacNgauNhien = [...mangXucXacNgauNhien, xucXacNgauNhien];
            }
            state.mangXucXac = mangXucXacNgauNhien;
            //Xử lý tổng số bàn chơi
            state.tongSoBanChoi += 1;
            //Xử lý bàn thắng
            state.tongSoDiem = mangXucXacNgauNhien.reduce((tongDiem, xucXac, index) => { return tongDiem += xucXac.ma }, 0);
            if ((state.tongSoDiem > 11 && state.taiXiu) || (state.tongSoDiem <= 11 && !state.taiXiu)) {
                state.soBanThang += 1;
            }
            if (state.tongSoDiem > 11) {
                state.ketQua = 'TÀI'
            } else {
                state.ketQua = 'XỈU'
            }
            return { ...state }
        }; break;
        default: return { ...state }
    }
}

export default BaiTapGameXucXacReducer;