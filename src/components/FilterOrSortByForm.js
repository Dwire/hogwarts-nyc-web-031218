import React, { Component } from 'react'

class FilterOrSortByForm extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit}>
          <label>GREASED?</label>
          <input type='checkbox' onChange={this.props.handleRadioInput} checked={this.props.greased} />
          <br/>
          <label>Sort BY</label>
          <select name='sortBy' value={this.props.sortBy} onChange={this.props.handleSelectChange} >
            <option value="all" name='all'>All</option>
            <option value="name" name='name'>Name</option>
            <option value="weight" name='weight'>Weight</option>
          </select>
        </form>
        <hr/>
      </div>
    )
  }
}


export default FilterOrSortByForm
