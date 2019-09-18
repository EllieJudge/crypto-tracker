import React from 'react';
import '../index.css';
import {AppBar, Toolbar, Typography } from '@material-ui/core';
import SwipeableTemporaryDrawer from './Hamburger';


class Navbar extends React.Component {
    render(){
        return(
            <div>
                <AppBar position="static">
                <Toolbar title="Crypto-App">
                <div marginLeft={'500px'}>
                        <SwipeableTemporaryDrawer />
                </div> 
                        <Typography variant="h6">Crypto-App</Typography>    
                    </Toolbar>
                   
                </AppBar>
            </div>
        )
    }
}
export default Navbar;
