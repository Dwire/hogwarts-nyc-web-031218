import React, { Component } from 'react'
import HogDetail from './HogDetail'

class HogCard extends Component {
  state = {
    toggle: false
  }

  toggleDetails = () => {
    this.setState({toggle: !this.state.toggle})
    
  }

  createImgSlug = () => {
    const newName = this.props.hog.name.toLowerCase().split(" ").join("_")
    const finalImgSlug = require(`../hog-imgs/${newName}.jpg`)

    return finalImgSlug
  }

  render() {
    return (
      <div className='pigTile ui four wide column'>
        <h3 >{this.props.hog.name}</h3>
        <img src={this.createImgSlug()} />
        <hr/>
        <button onClick={this.toggleDetails}>Show Details</button>
        {this.state.toggle && <HogDetail hog={this.props.hog} />}
      </div>
    )
  }
}

export default HogCard