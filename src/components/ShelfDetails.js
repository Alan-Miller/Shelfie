import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class ShelfDetails extends Component {
  constructor() {
    super()
    this.state = {
      bins: []
    }
  }

  componentWillMount() {
    axios.get(`/api/bins/${this.props.match.params.shelf_name}`).then(bins => {
      this.setState({ bins: bins.data });
    })
  }

  render() {
    const { shelf_name } = this.props.match.params;
    return (
      <div>{this.state.bins.map((bin, i) => (
        <Link key={bin.id} to={`/shelf/${shelf_name}/bin/${bin.bin_num}`}>
          <div className="bin">Bin {bin.bin_num}</div>
        </Link>
      ))}</div>
    )
  }
}