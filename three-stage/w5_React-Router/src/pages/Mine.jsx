import React from 'react'
import { withStorage } from '../hoc/index.js';


// ES7 引用高阶组件
@withStorage


// 类组件
class Mine extends React.Component{
    constructor(){
        super();
    }
    render(){
        return <div>
            Mine {this.props.token}
        </div>
    }
}

// Mine = withStorage(Mine)
// 暴露
export default Mine