import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import './App.css';
import AddressBook from './AddressBook';
import './AddressBook.css'

import Error from './Error.js'
import ShoppingList from './ShoppingList';
import './ShoppingList.css'
import StarWarAPI from './StarWarAPI';


function App() {
  return (
    <div className="App ">
      
      <Router>

        <nav class="navbar navbar-expand-sm bg-dark navbar-dark ">
          
          <ul class="navbar-nav " >
          <li class="nav-list-item">
           <p class="navbar-brand text-decoration-none " >Xoriant</p>
          </li>
            <li class="nav-list-item">
              <Link className="nav-link" to="/">Address Book</Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to="/shoppingList">Shopping List</Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to="/starWarApi">Star War API</Link>
            </li>
        </ul>
        </nav>
        <hr/>

        <Switch>
          <Route exact path="/" component={AddressBook} />

          <Route exact path="/shoppingList" component={ShoppingList} />

          <Route exact path="/starWarApi" component={StarWarAPI} />


          <Route component={Error} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
