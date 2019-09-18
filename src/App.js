import React from 'react';
import Axios from 'axios';
import SimpleTable from './components/Table';
import NavBar from './components/NavBar';
import { BrowserRouter, Route } from 'react-router-dom';

//Pages
import About from './components/pages/About';
import CoinInfo from './components/pages/CoinInfo';
import Favourites from './components/pages/Favourites';

//Why dis no work? Ask Will
//import { About, CoinInfo, Favourites } from './components/pages/'

class App extends React.Component {
    state = {
        coins: []
    }

    componentDidMount(){
        Axios.get('https://api.coingecko.com/api/v3/coins?order=rank_desc&per_page=100')
        .then(response => {
            console.log('success!', response)
            this.setState({
                coins: response.data
            })
        })
        .catch(function (err) {
            console.log('err', err)
        })
    }
    render() {
        return (
            <BrowserRouter>
                <div>
                    <NavBar />

                    <Route exact path='/' render={() => <SimpleTable data={this.state.coins} />} />
                    <Route path = '/Home' render = {() =>  <SimpleTable data={this.state.coins} />} />
					<Route path='/About' component={About} />
                    <Route path = '/Favourites' component={Favourites} />
                    <Route path='/CoinInfo' component={CoinInfo} />	
                    {/* render={(props) => <Dashboard {...props} isAuthed={true}				 */}
                </div>
            </BrowserRouter>
        )
    }
}


export default App
