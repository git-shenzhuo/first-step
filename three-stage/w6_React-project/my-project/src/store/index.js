import {createStore} from 'redux'

import reducer from './reducer';

// 创建 Redux  的  store
let store = createStore(reducer)

// 暴露
export default store