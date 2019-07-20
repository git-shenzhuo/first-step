import React from 'react'
import Context from '../context'


// function TodoItem({data,idx,removeItem,completeItem}){
    // console.log(removeItem,completeItem,data.id);
function TodoItem({data,idx}){
    return <tr>
        <td>{idx+1}</td>
        <td>{data.content}</td>
        <td>{data.date}</td>
        <td>
            <Context.Consumer>
                {
                    ({completeItem,removeItem})=>{
                        return <div className='btn-group btn-group-sm'>
                            {
                                data.done?null:<button className='btn btn-success' onClick={completeItem.bind(this,data.id)}>完成</button>
                            }
                            <button className='btn btn-danger' onClick={removeItem.bind(this,data.id)}>删除</button>
                        </div>  
                    }
                }
            </Context.Consumer>
            {/* <div className='btn-group btn-group-sm'>
                {
                    data.done?null:<button className='btn btn-success' onClick={completeItem.bind(this,data.id)}>完成</button>
                }
                <button className='btn btn-danger' onClick={removeItem.bind(this,data.id)}>删除</button>
            </div> */}
        </td>
    </tr>
}

export default TodoItem