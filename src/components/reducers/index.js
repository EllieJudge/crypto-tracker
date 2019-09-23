//COMEBINE REDUCERS
//(because createStore can't be passed more than one arg)

//IMPORT them all
import favouriteReducer from './favouriteReducer';
import coinsReducer from './coinsReducer';
import searchReducer from './searchReducer';

//IMPORT comebineReducer method from redux
import { combineReducers } from 'redux'



//THIS IS YOUR STORE!!
//function with object
const allReducers = combineReducers({
    //NAMES OF REDUCERS
    favourite: favouriteReducer,
    getCoins: coinsReducer,
    searchCoins: searchReducer
});

//EXPORT
export default allReducers;