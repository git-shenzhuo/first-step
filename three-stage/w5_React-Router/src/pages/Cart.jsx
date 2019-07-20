import React from 'react'



// 类组件
class Cart extends React.Component{
    constructor(){
        super();

        this.state = {
            token:''
        }
    }
    // 在挂载前获取storage
    componentWillMount(){
        let token = localStorage.getItem('Authorization')

        this.setState({
            token
        })
    }
    render(){
        return <div>
            Cart
            <p>
                {this.state.token}
            </p>
        </div>
    }
}

// 暴露
export default Cart