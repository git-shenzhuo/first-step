import React from 'react'
import {api} from '../../utile'

// import store from '../../store'

import { List, Card ,Button,Icon} from 'antd'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import ActionCreator,{createAddToCartAction,createRemoveFromCartAction,createChangeToQtyAction} from '../../store/cartAction'

class Goods extends React.Component{
    constructor(){
        super();
        this.state = {
            datas:[],
            info:[],
            commendlist:[]
        }
    }
    async componentWillMount(){
        let {id} = this.props.match.params
        let {data:{datas}} = await api.get('/index.php',{
            params:{
                act:'goods',
                op:'goods_detail',
                goods_id:id
            }
        })
       this.setState({
           datas,
           info:datas.goods_info,
           commendlist:datas.goods_commend_list
       })    
    //    console.log(this.state.datas);

    }
    render(){
        let {goods_image} = this.state.datas
        let info = this.state.info
        // console.log(goods_name);
        
        return<div>
            <div style={{textAlign:'center'}}>
                <img src={goods_image} alt='123'/>
                <h1>{info.goods_name}</h1>
                <Button type="danger" size='large' onClick={()=>{
                    // store.dispatch({type:'add_to_cart',payload:{id:info.goods_id,name:info.goods_name,price:info.goods_promotion_price}})
                    this.props.createAddToCartAction({id:info.goods_id,name:info.goods_name,price:info.goods_promotion_price})
                }}><Icon type="shopping-cart" />添加购物车</Button>
            </div>
        <h2>新品推荐</h2>
        {
            <List
            grid={{
              gutter: 16,
              xs: 2,
              sm: 3,
              md: 4,
              lg: 4,
              xl: 6,
              xxl: 8,
            }}
            dataSource={this.state.commendlist}
            renderItem={item => (
              <List.Item>
                <Card title={item.goods_name}>
                    <img src={item.goods_image_url} alt={item.goods_name} style={{width:'100%'}}/>
                    <p className="price"><span>{item.goods_promotion_price}</span></p>
                </Card>
              </List.Item>
            )}
          />
        }
    </div>
    }  
}

// 高阶组件

Goods = connect((state)=>{
    return{}
},(dispatch)=>{
    // return {
    //     addAction(goods){
    //         dispatch(createAddToCartAction(goods))
    //     },
    //     removeAction(id){
    //         dispatch(createRemoveFromCartAction(id))
    //     },
    //     changeQtyAction({id,qty}){
    //         dispatch(createChangeToQtyAction({id,qty}))
    //     }
    // }

    // 上下等同 
    return bindActionCreators(ActionCreator,dispatch)
})(Goods)

export default Goods