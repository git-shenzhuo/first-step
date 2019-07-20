import React,{Component} from 'react'
import {Route,Switch,NavLink,withRouter,Redirect} from 'react-router-dom'

// 引入组件
import Home from './pages/Home.jsx'
import List from './pages/List.jsx'
import Cart from './pages/Cart'
import Mine from './pages/Mine'
import Goods from './pages/Goods'

class App extends Component{
    constructor(){
        super();
        this.state = {
            navs:[{
                name:'Home',
                path:'/home',
                title:'首页'
            },{
                name:'List',
                path:'/list',
                title:'列表'
            },{
                name:'Cart',
                path:'/cart',
                title:'购物车'
            },{
                name:'Mine',
                path:'/mine',
                title:'我的'
            }]
        }
        this.goto = this.goto.bind(this)
    }


    goto(path){
        let {history} = this.props
        history.push(path)           
    }

    render(){
        return <div>
            {/* 点击导航加载不同组件 */}
            {/* <ul> */}
                {/* 可以使用默认组件的情况，声明式导航 */}
                {/* {this.state.navs.map(item=>{
                    return <li key={item.name}><NavLink to={item.path}>{item.title}</NavLink></li>
                })} */}
            {/* </ul> */}
            <ul>
                {/* 不能使用内置组件的情况，编程式导航 */}
                {this.state.navs.map(item=>{
                    return <li key={item.name} onClick={this.goto.bind(this,item.path)}>{item.title}</li>
                })}
            </ul>
            <Switch>
                <Route path='/home' component={Home}/>
                <Route path='/list' component={List}/>
                <Route path='/cart' component={Cart}/>
                <Route path='/mine' component={Mine}/>
                <Route path='/goods/:id' component={Goods}></Route>
                <Route path='/404' render={()=><div>oh no 404</div>}/>
                {/* 如果不写路径，默认到首页 */}
                <Redirect from='/' to='/home' exact/>
                {/* 如果路径不对，抛出404错误，exact精准匹配 */}
                <Redirect from='/*' to='/404'/>
            </Switch>
        </div>
    }
}

// 放入高阶函数，以便获取history
App = withRouter(App)
export default App