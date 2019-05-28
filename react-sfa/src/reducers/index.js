import { combineReducers } from 'redux'
import app from './app'
import login from './login'
import DCRList from './DCRList'
import DCR from './DCR'
import Calendar from './calendar'
import DOCTOR from './DoctorProfile'
import DCRJoint from './DCRJoint'
import MASTERList from './master'
import DCRPob from './DCRPob'
import OTHERACT from './OtherActivity'
import DCRSamples from './DCRSamples'

const rootReducer = combineReducers({
    app,
    login,
    DCRList,
    DCR,
    DCRPob,
    Calendar,
    DOCTOR,
    DCRJoint,
    MASTERList,
   // MASTERheader,
    OTHERACT,
    DCRSamples

})

export default rootReducer