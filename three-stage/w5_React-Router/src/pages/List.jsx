import React from 'react'
import {NavLink,Route,Switch,Redirect} from 'react-router-dom'

// 引入高阶组件
import {withStorage} from '../hoc/index.js'

class List extends React.Component{
    constructor(){
        super();
        this.state = {
            goodslist:[{
                id:1,
                name:'商品1',
                price:998,
                imgurl:'img/g1.jpg'
            },{
                id:2,
                name:'商品1',
                price:998,
                imgurl:'img/g1.jpg'
            }],
            menu:[{
                name:'Maotai',
                title:'茅台',
                path:'/maotai'
            },{
                name:'WLY',
                title:'五粮液',
                path:'/wly'
            },{
                name:'XO',
                title:'XO',
                path:'/xo'
            },{
                name:'zhujiang',
                title:'珠江纯生',
                path:'/zhujiang'
            }]
        }

        this.goto = this.goto.bind(this)
    }

    goto(id,price,title,name){
        // console.log(this.props);
        let {history} = this.props
        history.push({
            pathname:'/goods/'+id,
            search:'?n='+Date.now(),
            state:{
                    price,
                    title,
                    name
                }     
        })
    }

    render(){
        let {url,path} = this.props.match;
        // console.log(url,path);
        
        return <div>
            <nav>
                {
                    this.state.menu.map(item=><NavLink key={item.name} style={{margin:'0 10px'}} activeStyle={{color:'red'}} to={url+item.path}>{item.title}</NavLink>)
                }
            </nav>
            <Switch>
                {
                    this.state.menu.map(item=>{
                        return <Route key='item.name' path={path+item.path} render={()=>{
                            return <div>
                                {
                                    this.state.goodslist.map(data=>{
                                        return <div key={data.id} onClick={this.goto.bind(this,data.id,data.price,item.title,data.name)}>
                                            <img src={data.imgurl} alt=""/>
                                            <h4>{item.title}{data.name}</h4>
                                            <p>{data.price}</p>
                                        </div>
                                    })
                                }
                                </div>
                            }
                        }>
                        </Route>
                    })
                }
                {/* 进来茅台默认获取焦点 */}
                <Redirect to={path+'/maotai'}></Redirect>
            </Switch>
        </div>
    }
}

List = withStorage(List)
// 暴露
export default List