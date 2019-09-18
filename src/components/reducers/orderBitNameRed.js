//REDUCER - FOR ORDERING COINS BY NAME
//BKBKJ

const orderBitNameReducer = (state=true, action) => {
    switch(action.type) {
        case 'ORDER_BIT_NAME':
            console.log('order bit name' + !state)
            return !state
    
        default: 
            return state;
}
}
export default orderBitNameReducer;