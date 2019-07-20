
import React from 'react'
import TodoList from './components/TodoList.jsx'

class APP extends React.Component{
    render(){
        return <div>
           <TodoList/> 
        </div>
    }
}

// 暴露出去
export default APP;