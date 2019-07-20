
import React,{Component} from 'react'
// import ReactDOM from 'react-dom'

class TodoForm extends Component{
    constructor(){
        super();

        this.state = {
            keyword:''
        }

        this.changekeyword = this.changekeyword.bind(this)
        this.addParentItem = this.addParentItem.bind(this)
    }

    // 事件方法
    // 跟随value改变，改变keyword的值
    changekeyword(e){
        // e 表示事件所在标签
        this.setState({
            keyword:e.target.value
        })
    }
    // 点击添加
    addParentItem(){
        // 封装方法，以便调用addItem
        this.props.addItem(this.state.keyword)

        // 清空value
        this.setState({
            keyword:''
        })

        // 获取焦点
        this.refs.keyword.focus();
    }
    // 回车事件
    handleKeyup(e){
        if(e.keyCode == 13){
            this.addParentItem()
        }
    }
    render(){
        return <div className='input-group'>
            {/* 在给表单添加 value 时，必须同时添加 onChange 事件 */}
            {/* 通过ref获取标签 */}
            <input type='text' className='form-control' ref='keyword' value={this.state.keyword} onChange={this.changekeyword.bind(this)} />
            <div className="input-group-append">
                <button className='btn btn-success' onClick={this.addParentItem}>添加</button>
            </div>
        </div>
    }
}

export default TodoForm