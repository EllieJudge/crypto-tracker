import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import SimpleTable from './components/Table';
import SearchBar from './components/SearchBar';
//Pages
import About from './components/pages/About';
import CoinInfo from './components/pages/CoinInfo';
import Favourites from './components/pages/Favourites';

// //TO ACCESS A PIECE OF STATE
import { useSelector } from 'react-redux'; //lets you SELECT bits of state

// //TO IMPORT OUR ACTIONS
import { getCoins } from './components/actions';
// import { getSearch } from './components/actions';

// //TO DEPORT(use) OUR ACTION
import {useDispatch} from 'react-redux';


function App () {  

//store bits of state in variable using selector
const coins = useSelector(state=>state.getCoins);
const searchResults = useSelector(state=>state.searchCoins);

function display () {
    console.log('display func', coins)
    console.log('display func', searchResults)
    const filteredCoins = coins.name.filter((coin) => coin.name.includes(searchResults))
    //return coins.filter.indexOf(searchResults)
    console.log('filteredCoins', filteredCoins)
    return filteredCoins

}
display()

console.log(filteredCoins)
//console.log(searchResults)
// const searchTerm = useSelector(state=>state.search); //Combined reducers state
// console.log('searchTerm',searchTerm)
// function searchFunc () {
//     if (searchTerm > 1) {
//         return console.log('search term greater than one')
//     } else {
//         return console.log('search term not being picked up?')
//     } 
// }
// searchFunc()
    //coins = searchTerm

//save useDispatch in variable
const dispatch = useDispatch();

//dispatch function (instead of an onclick)
function getCoinsFunc () {
    dispatch(getCoins())
    // dispatch(getSearch(coins))
}
getCoinsFunc()

// const searchedCoins = useSelector(state=>state.searchCoins);

        //GETTING COINS DATA PASSED FROM coinsReducer
        return (
            <BrowserRouter>
                <div>                  
                    <NavBar />
                    {/* send data to SearchBar  */}
                    <SearchBar data={coins}/>
                        <Route exact path='/' render={() => <SimpleTable data={coins}/>} />
                        <Route path = '/Home' render = {() =>  <SimpleTable data={coins}/>} />
                        <Route path='/About' component={About} />
                        <Route path = '/Favourites' component={Favourites} />
                        <Route path='/CoinInfo' component={CoinInfo} />	
                </div>
            </BrowserRouter>
        )
    }


export default App;
