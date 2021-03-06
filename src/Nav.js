import React, { Component } from 'react';
import {
   NavLink
} from 'react-router-dom';

class Nav extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      vehicles: []
    }
  }

  componentDidMount() {
    // Fetch list of vehicles from SWAPI.co
    fetch(`https://swapi.dev/api/vehicles/`)
      .then(response => response.json())
      .then(json => this.setState({ vehicles: json.results }))

      console.log(this.state.vehicles);
  }

  render() {
    return (
      <ul className="ml-5">
        {this.state.vehicles.map((vehicle, index) => {
          // vehicle.url: https://swapi.co/api/vehicles/4/
          const id = vehicle.url.split('/')[5]
          return (
            <li key={index}>
              <NavLink activeStyle={{fontWeight: 'bold'}} to={`/vehicle/${id}`}>
                {vehicle.name}
              </NavLink>
            </li>
          )
        })}
      </ul>
    );
  }
}

export default Nav;
