import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//IMPORT STORE
import { createStore } from 'redux'

//IMPORT PROVIDER (this links our global state/store to our app)
import { Provider } from 'react-redux';

//CAN'T PASS IN MORE THAN ONE REDUCER INCREATE STORE, SO NEED TO 
//PASS IN THE COMBINE REDUCERS (allReducers) FUNCTION
import allReducers from './components/reducers';

//OUR STORE
//add allReducers
//goto redux dev tools, copy and paste this line of code, now can see store
//in google chrome !
const store = createStore(
    allReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

//WRAP the provider around app, pass it store
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
