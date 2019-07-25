import React from 'react';
import {Switch,Route,Redirect,withRouter} from 'react-router-dom'
import { Menu, Icon ,Badge} from 'antd';
import 'antd/dist/antd.css'

// 引入store
import store from './store'



// 引入组件
import Home from './pages/Home'
import Cart from './pages/Cart'
import List from './pages/List'
import Mine from './pages/Mine'
import Goods from './pages/Goods'


class App extends React.Component{
  constructor(){
    super();
    this.state = {
      navs:[{
        name:'Home',
        path:'/home',
        icon:'home',
        title:'首页'
      },{
        name:'List',
        path:'/list',
        icon:'unordered-list',
        title:'商品列表'
      },{
        name:'Cart',
        path:'/cart',
        icon:'shopping-cart',
        title:'购物车'
      },{
        name:'Mine',
        path:'/mine',
        icon:'user',
        title:'我的'
      }],
      current:'Home'
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(data){
    console.log(data)
    // 点击高亮
    let current = data.key
    this.setState({
      current
    })

    // 点击切换路由
    let currentRoute = this.state.navs.filter(item=>item.name===current)[0]
    this.props.history.push(currentRoute.path)
  }

  componentDidMount(){
    // 监听state 更改
    store.subscribe(()=>{
      console.log(666);
      // 强制刷新
      this.forceUpdate();
      
    })
  }

  render(){
    // 拿到store里面的数据 
    let {goodslist} = store.getState()  
    let {navs} = this.state
    return (
      <div className="App">
         <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
          {
            navs.map(item=>{
              return <Menu.Item key={item.name}>
              {
                item.name === 'Cart' ?
                 <Badge count={goodslist.length}>
                  <Icon type={item.icon} />
                  {item.title}
                  </Badge>
                  :
                  <>
                  <Icon type={item.icon} />
                  {item.title}
                  </>
              }              
              </Menu.Item>
              })
          }
          </Menu>
          <Switch>
            <Route path='/home' component={Home}></Route>
            <Route path='/list' component={List}></Route>
            <Route path='/cart' component={Cart}></Route>
            <Route path='/mine' component={Mine}></Route>
            <Route path='/goods/:id' component={Goods}></Route>

            <Redirect from='/' to='/home' />
          </Switch>
      </div>
    );
  }
  
}

App = withRouter(App)

export default App;
