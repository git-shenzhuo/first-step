import React from 'react'

import TodoItem from './TodoItem.jsx'


function TodoCentent({data,removeItem,completeItem}){
    // 过滤，区分是否完成
    let weilist = data.filter(item=>!item.done)
    let yilist = data.filter(item=>item.done)
    return <table className='table'>
        <thead>
            <tr>
            <th>#</th>
            <th>待办事项</th>
            <th>事件</th>
            <th>操作</th>
            </tr>
        </thead>
        <tbody>
            {weilist.map((item,idx)=>{
                return <TodoItem data={item} idx={idx} key={item.id} removeItem={removeItem} completeItem={completeItem}/>
            })}
        </tbody>
        <tbody>
            {yilist.map((item,idx)=>{
                return <TodoItem data={item} idx={idx} key={item.id} removeItem={removeItem} completeItem={completeItem}/>
            })}
        </tbody>
    </table>
}

export default TodoCentent