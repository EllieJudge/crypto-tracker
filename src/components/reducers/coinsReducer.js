
//REDUCER - FOR SAVING TO FAVS
//reducer changes the state 

const getCoinsReducer = (state=coins, action) => {
    switch(action.type) {
        case 'FETCH_COINS':
            
            return !state;
             
        default:
            return state;
    }
}

export default getCoinsReducer;