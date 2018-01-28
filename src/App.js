import React, { Component } from 'react';
import './styles/main.css';
import Header from './components/Header';
import ShelfDetails from './components/ShelfDetails';
import BinDetails from './components/BinDetails';
import AllShelves from './components/AllShelves';
import { Route, Switch } from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <div className="main_section">
          <Switch>
            <Route path="/shelf/:shelf_name/bin/:bin_num" component={BinDetails} />
            <Route path="/shelf/:shelf_name" component={ShelfDetails} />
            <Route path="/" component={AllShelves} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
