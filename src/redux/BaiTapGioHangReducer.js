// setup State giỏ hàng trên store
const stateGioHang = {
    gioHang: []
}

const BaiTapGioHangReducer = (state = stateGioHang, action) => {

    // eslint-disable-next-line default-case
    switch (action.type) {
        case 'THEM_GIO_HANG': {
            let index = state.gioHang.findIndex(spGH => spGH.maSP === action.spGioHang.maSP);
            if (index !== -1) {
                state.gioHang[index].soLuong += 1;
            } else {
                state.gioHang = [...state.gioHang, action.spGioHang];
            }

            //setState
            state.gioHang = [...state.gioHang];

            return { ...state }
        }; break;
        case 'XOA_GIO_HANG': {
            let gioHangMoi = state.gioHang.filter((spGH) => { return spGH.maSP !== action.maSP })

            //setState
            state.gioHang = gioHangMoi;
            return { ...state }
        }; break;
        case 'TANG_GIAM_SO_LUONG': {
            let gioHangCapNhat = [...state.gioHang];
            //Xử lý tăng giảm trên giỏ hàng cập nhật
            let index = gioHangCapNhat.findIndex(spGH => spGH.maSP === action.maSP);
            if (index !== -1) {
                if (action.tangGiam) {
                    gioHangCapNhat[index].soLuong += 1
                } else {
                    if (gioHangCapNhat[index].soLuong > 1) {
                        gioHangCapNhat[index].soLuong += 1
                    } else {
                        alert('Số lượng không được bé hơn số lượng tối thiểu là 1');
                    }
                }
            }
            state.gioHang = gioHangCapNhat;
            return { ...state }
        }
    }
    return { ...state }
}

export default BaiTapGioHangReducer;