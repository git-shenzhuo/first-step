import React from 'react'
import ReactDOM,{render} from 'react-dom'

import {HashRouter} from 'react-router-dom'

import App from './App'

render(
    // 把路由环境提到最高组件中
    <HashRouter>
        <App/>
    </HashRouter>
    ,
    document.getElementById('app')
)