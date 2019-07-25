import React from 'react'
import {api} from '../../utile'
import {Carousel,Row,Col} from 'antd'


class Home extends React.Component{
    constructor(){
        super();
        this.state = {
            advlist:[],
            goodslist:[]
        }
        this.goto = this.goto.bind(this)
    }
    async componentWillMount(){
        let {data} = await api.get('index.php?act=index',{

        })
        // console.log(data)
        let advlist = data.datas[0].adv_list.item
        let goodslist = data.datas.slice(1).map(item=>item.goods)
        this.setState({
            advlist,
            goodslist
        })
    }
    goto(id){
        // console.log(id);
        let {history} = this.props
        history.push({
            pathname:'/goods/'+id
        })
        
    }
    render(){
        let {advlist,goodslist} = this.state
        return <div>
            {/* 轮播图 */}
            <Carousel>
                {
                    advlist.map(item=><div key={item.data}>
                            <img src={item.image} alt={item.data} style={{width:'100%'}} />                        
                        </div>)
                } 
            </Carousel>
            {/* 商品列表 */}
            {
                goodslist.map(({title,item})=>{
                    return <div key={title} style={{padding:'0 10px'}}>
                        <h2>{title}</h2>
                        <Row gutter={16}>
                            {
                                item.map(data=><Col onClick={this.goto.bind(this,data.goods_id)} key={data.goods_id} className="gutter-row" span={12} style={{height:'300px'}}>
                                    <img src={data.goods_image} alt={data.goods_name} style={{width:'90%'}}/>
                                    <h4>{data.goods_name}</h4>
                                    <p className="price"><del>{data.goods_price}</del><span style={{marginLeft:'10px',color:'red'}}>{data.goods_promotion_price}</span></p>
                                    </Col>)
                            }                           
                        </Row>
                    </div>
                })
            }
                
        </div>
    }
}

export default Home