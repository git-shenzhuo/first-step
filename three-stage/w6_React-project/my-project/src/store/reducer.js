
import {ADD_TO_CART,REMOVE_FROM_CART,CHANGE_TO_QTY} from './cartAction'



// 初始化state
let initState = {
    goodslist:[]
}

// reducer 接收 state 和 action ，返回一个新的 state。    纯函数
// let reducer = function(state,action){

// }

let reducer = (state=initState,action)=>{
    switch (action.type) {
        // 增------其他组件调用方法   store.dispatch({type:'add_to_cart',payload:{id,name,price}})
        case ADD_TO_CART:
            // 返回新的state
            return {
                // state 里面以前的东西原样返回
                ...state,
                // 更改的goodslist
                goodslist:[action.payload,...state.goodslist]

            }
            // 直接return break 可要可不要

        // 删------调用，store.dispatch({type:'remove_from_cart',payload:{id}})
        case REMOVE_FROM_CART:
            return {
                ...state,
                goodslist:state.goodslist.filter(item=>item.id!=action.payload.id)
            }


        // 改------修改数量调用，store.dispatch({type:'change_to_qty',payload:{id,qty}})
        case CHANGE_TO_QTY:
            return {
                ...state,
                goodslist:state.goodslist.map(item=>{
                    if(item.id == action.payload.id){
                        item.qty = action.payload.qty
                    }
                    return item
                })
            }

        // 如果没有符合的操作，直接返回state
        default:
            return state
    }
}

// 把reducer暴露出去
export default reducer