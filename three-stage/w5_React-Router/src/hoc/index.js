import React from 'react'

// 高阶组件就是封装的组件,；可以传参
export function withStorage(InputComponent){
    let token = localStorage.getItem('Authorization')
    // 返回一个组件
    return function(props){
        return <InputComponent {...props} token={token}></InputComponent>
        // {...props} 表示把从父组件接收的参数全部传递给子组件
        // token=｛token｝ 传递该高级组件自定义的参数
    }
}