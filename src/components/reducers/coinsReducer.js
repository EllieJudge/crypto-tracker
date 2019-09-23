import Axios from 'axios';

//COINS REDUCER - GETS COINS
//reducer changes the state 
const coinsReducer = (state = [], action) => {
    switch(action.type) {
        case 'GET_COINS':
        //component did mount
            Axios.get('https://api.coingecko.com/api/v3/coins?order=rank_desc&per_page=100')
            .then(response => {
                //console.log('success!', response)              
                return state.push(...response.data) //destructuring! LOOK IT UP
            })
            .catch(function (err) {
                console.log('err', err)
            })
            return state;
        default:
            return state;
    }
}

export default coinsReducer;