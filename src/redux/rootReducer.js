import { combineReducers } from 'redux';
import BaiTapGioHangReducer from './BaiTapGioHangReducer';
import BaiTapGameXucXacReducer from './BaiTapXucXacReducer';

const rootReducer = combineReducers({
    stateGioHang: BaiTapGioHangReducer,
    BaiTapGameXucXacReducer //state bài tập game
})

export default rootReducer;