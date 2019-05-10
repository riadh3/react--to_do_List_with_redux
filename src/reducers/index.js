import {combineReducers} from 'redux'

import task from './taskReducer'
import list from './listReducer'

const rootReducer = combineReducers({
    task,
    list
})

export default rootReducer;