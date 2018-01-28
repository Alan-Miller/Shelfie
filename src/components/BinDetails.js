import React, { Component } from 'react';
import axios from 'axios';

export default class BinDetails extends Component {
  constructor() {
    super()
    this.state = {
      inv_name: '',
      inv_price_cents: '',
      edit: false
    }
    this.editSave = this.editSave.bind(this);
  }

  componentWillMount() {
    let { shelf_name, bin_num } = this.props.match.params;
    axios.get(`/api/shelf/${shelf_name}/bin/${bin_num}`).then(details => {
      const { inv_name, inv_price_cents } = details.data[0];
      this.setState({ inv_name, inv_price_cents: inv_price_cents.toString() }, console.log);
    })
  }

  inputChange(e, prop) {
    if (!this.state.edit) return;
    if (prop === 'inv_price_cents' && !(+e.target.value)) return;
    this.setState({
      [prop]: e.target.value
    })
  }

  editSave() {
    if (this.state.edit) {
      const { shelf_name, bin_num } = this.props.match.params;
      const { inv_name, inv_price_cents } = this.state;
      axios.put(
        `/api/shelf/${shelf_name}/bin/${bin_num}`,
        {
          inv_name,
          inv_price_cents
        }
      ).then(details => {
        const { inv_name, inv_price_cents } = details.data[0];
        this.setState({ inv_name, inv_price_cents: inv_price_cents.toString() }, console.log);
      })
    }
    this.setState({ edit: !this.state.edit });
  }

  render() {
    const { inv_name, inv_price_cents } = this.state;
    return (
      <form className="form">
        <p>Name</p>
        <input value={inv_name} onChange={e => this.inputChange(e, 'inv_name')} />
        <p>Price</p>
        <input value={inv_price_cents} onChange={e => this.inputChange(e, 'inv_price_cents')} />
        <div className="form-buttons">
          <button className="edit button" onClick={this.editSave}>{this.state.edit ? 'SAVE' : 'EDIT'}</button>
          <button className="delete button">DELETE</button>
        </div>
      </form>
    )
  }
}