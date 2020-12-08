import {
    BrowserRouter as Router,
    Route,

    Switch
  } from 'react-router-dom';
import React, { Component } from 'react';
import Nav from './Nav.js';
import Vehicle from './Vehicle.js';

class StarWarAPI extends Component {
    render() {
        return (
            <div>
                <h1>Star Wars Vehicles!</h1>
                <Router>
                <Nav />
                <hr />

                <Switch>

                    <Route path="/vehicle/:vehicleId" component={Vehicle} />

                
                </Switch>
                </Router>
            </div>
        );
    }
}

export default StarWarAPI;