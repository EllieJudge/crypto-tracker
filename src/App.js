import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import SimpleTable from './components/Table';
import SearchBar from './components/SearchBar';
//Pages
import About from './components/pages/About';
import CoinInfo from './components/pages/CoinInfo';
import Favourites from './components/pages/Favourites';

//TO ACCESS A PIECE OF STATE
import { useSelector } from 'react-redux'; //lets you SELECT bits of state

//TO IMPORT OUR ACTIONS
import { getCoins } from './components/actions';

//TO DEPORT(use) OUR ACTION
import {useDispatch} from 'react-redux';

//seearchterm


function App () {  
//store bits of state in variable using selector
const coins = useSelector(state=>state.getCoins);
//save useDispatch in variable
const dispatch = useDispatch();
//dispatch function (instead of an onclick)
function makeWorkPls () {
    dispatch(getCoins())
}
makeWorkPls()

function handleSearchChange (term) {
    
}

// const searchedCoins = useSelector(state=>state.searchCoins);
        //GETTING COINS DATA PASSED FROM coinsReducer
        return (
            <BrowserRouter>
                <div>                  
                    <NavBar />
                    {/* send data to SearchBar */}
                    <SearchBar handleSearchChange={handleSearchChange} data={coins}/>
                        <Route exact path='/' render={() => <SimpleTable data={coins} />} />
                        <Route path = '/Home' render = {() =>  <SimpleTable data={coins} />} />
                        <Route path='/About' component={About} />
                        <Route path = '/Favourites' component={Favourites} />
                        <Route path='/CoinInfo' component={CoinInfo} />	
                </div>
            </BrowserRouter>
        )
    }


export default App;
