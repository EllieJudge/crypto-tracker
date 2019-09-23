//REDUCER FOR SEARCH BAR/SEARCHING COINS

const searchReducer = (state = [], action) => { // []
    switch(action.type){
        //set search
        case 'SET_SEARCH':
        console.log('SET_SEARCH:',state.concat([action.payload]))
        return state.concat([action.payload]);

        //get search
        // case 'GET_SEARCH':
        // console.log('GET_SEARCH', action.payload)
        // let coins = action.payload
        // //const result = coins.filter(coin => state)
        // let result = coins.filter(coin => coin === action.payload )
        // return coins.filter(coin => coin === action.payload )
        //return state;
      
    
        default: 
        console.log('default state searchReducer')
        return state;
    }
}

export default searchReducer;