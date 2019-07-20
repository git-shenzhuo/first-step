
// 引入React
import React from 'react'
// import ReactDOM from 'react-dom'
import '../css/bootstrap.css'
import Context from '../context'

import TodoForm from './TodoForm.jsx'
import TodoCentent from './TodoCentent.jsx'



class TodoList extends React.Component{
    constructor(){
        super();
        this.state = {
            data:[
                {
                    id:1,
                    content:'完成React项目',
                    date:'2019-7-28',
                    done:false
                },
                {
                    id:2,
                    content:'面试',
                    date:'2019-8-18',
                    done:false
                },
                {
                    id:3,
                    content:'vue项目',
                    date:'2019-7-15',
                    done:true
                }
            ]
        }

        // 在创建阶段修改所有方法的this指向，以免后面通过bind改变this造成混乱（bind只有第一次改变this有用，以后都失效）
        // 改变this指向
        this.addItem = this.addItem.bind(this)
        this.removeItem = this.removeItem.bind(this)
        this.completeItem = this.completeItem.bind(this) 

    }

    // 方法
    // 增
    addItem(content){
        let data = this.state.data
        let newContent = {
            id:Date.now(),
            content,
            date:'2019-7-17',
            done:false
        }
        // this.setState是唯一一个能修改this.state数据的方法
        this.setState({
            // 如果实例有会覆盖，没有添加属性
            data:[newContent,...data]
        })
    }
    // 删
    removeItem(id){
        let data = this.state.data.filter(item=>item.id!=id)
        this.setState({
            data
        })
    }
    // 改
    completeItem(id){
        let data = this.state.data
        data = data.map(item=>{
            if(item.id == id){
                item.done = !item.done
            }
            return item
        })
        this.setState({
            data
        })
    }

    render(){
        
        return <div className="p-3">

            {/* <TodoForm addItem={this.addItem}/>
            {(this.state.data.length!=0)?<TodoCentent data={this.state.data} removeItem={this.removeItem} completeItem={this.completeItem}/>:''} */}

            <Context.Provider value={{removeItem:this.removeItem,completeItem:this.completeItem}}>
                <TodoForm addItem={this.addItem}/>
                {(this.state.data.length!=0)?<TodoCentent data={this.state.data}/>:''}
            </Context.Provider >
        </div>
    }
}

export default TodoList
