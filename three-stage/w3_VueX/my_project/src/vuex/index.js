import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
    // 存储数据的地方，等同于data
    state:{
        goodslist:[{
            id:1,
            name: '鼠标', 
            price: 20,
            qty:1
        },{
            id:2,
            name: '键盘', 
            price: 250,
            qty:2
        }]
    },
    // 唯一允许修改数据的方法，等同于methods
    // 触发方式 store.commit('add',{name:'主机'})
    mutations:{
        // 增
        add(state,goods){
            // state：store里面的state
            // goods：添加商品的信息
            state.goodslist.unshift(goods)
        },
        // 删
        remove(state,id){
            // 过滤，id不等的组成新数组返回
            state.goodslist = state.goodslist.filter(item=>{
                return item.id != id
            })
        },
        // 改
        changeQty(state,{id,qty}){
            state.goodslist.forEach(item=>{
                if(item.id == id){
                    item.qty = qty
                }
            })
        }
    },
    // 计算属性，等同于computed
    getters:{
        // 计算八折价格
        saleGoodslist(state){
            return state.goodslist.map(item=>{
                item.price *= 0.8
                return item
            })
        }
    }
});

// 暴露
export default store;