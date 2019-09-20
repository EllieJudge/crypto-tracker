//REDUCER FOR SEARCH BAR/SEARCHING COINS

const searchReducer = (state = '', action) => {
    switch(action.type){
        //set search
        case 'SET_SEARCH':
        console.log('SET SEARCH:', action.payload)
        return state + action.payload

        //get search
        
    
      
    
        default: 
        console.log('default state searchReducer')
        return state;
    }
}

export default searchReducer;