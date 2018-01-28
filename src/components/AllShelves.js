import React, { Component } from 'react';
import Shelf from './Shelf';
import axios from 'axios';

class AllShelves extends Component {
  constructor() {
    super()
    this.state = {
      shelves: []
    }
  }

  componentWillMount() {
    axios.get('/api/shelves').then(shelves => {
      this.setState({ shelves: shelves.data });
    })
  }

  render() {
    return (
      <div className="AllShelves">
        {this.state.shelves.map((shelf, i) => (
          <div key={shelf.shelf_name}>
            <Shelf shelf_name={shelf.shelf_name} />
          </div>
        ))}
      </div>
    );
  }
}

export default AllShelves;
