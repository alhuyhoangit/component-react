import { combineReducers } from 'redux';
import BaiTapGioHangReducer from './BaiTapGioHangReducer';

const rootReducer = combineReducers({
    stateGioHang: BaiTapGioHangReducer
})

export default rootReducer;