
export const ADD_TO_CART = 'add_to_cart'
export const REMOVE_FROM_CART = 'remove_from_cart'
export const CHANGE_TO_QTY = 'change_to_qty'

function createAddToCartAction(goods){
    return {
        type:ADD_TO_CART,
        payload:goods
    }
}

function createRemoveFromCartAction(id){
    return {
        type:REMOVE_FROM_CART,
        payload:id
    }
}

function createChangeToQtyAction({id,qty}){
    return {
        type:CHANGE_TO_QTY,
        payload:{id,qty}
    }
}

export default {
    createAddToCartAction,
    createRemoveFromCartAction,
    createChangeToQtyAction
}