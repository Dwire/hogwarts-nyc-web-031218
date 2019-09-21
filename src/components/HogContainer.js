import React, { Component } from 'react';
import HogCard from "./HogCard";
import FilterOrSortByForm from "./FilterOrSortByForm";
import hogs from '../porkers_data';


class HogContainer extends Component {
  state = {
    hogsList: hogs,
    sortBy: 'all',
    greased: false
  }

  handleRadioInput = (e) => {
    this.setState({greased: !this.state.greased})
  }
  
  handleSelectChange = (e) => {
    const sortBy = e.target.value
    this.setState({sortBy})
  }

  sortByNameWeight = () => {
    //make copy of state array ** Sort changes OG array
    const copyArray = [...this.state.hogsList]

    if (this.state.sortBy === 'name'){
       return copyArray.sort((a,b) => {
        return a.name.localeCompare(b.name)
      })   
    }else if (this.state.sortBy === 'weight'){
      return copyArray.sort((a,b) => {
        return a.weight - b.weight
      })
    }else{
      return this.state.hogsList
    }
  }

  filterGreased = () => {
    const sortByHogsList = this.sortByNameWeight()

    if (this.state.greased){
      return sortByHogsList.filter(hog => hog.greased)
    }else{
      return sortByHogsList
    }
  }

  renderEachHog = () => {
    const finalHogList = this.filterGreased()
    return finalHogList.map(hog => <HogCard hog={hog}/>)
  }

  render() {
    return (
      <div>
        <FilterOrSortByForm 
          handleSelectChange={this.handleSelectChange} 
          sortBy={this.state.sortBy}
          handleRadioInput={this.handleRadioInput}
          greased={this.state.greased}   
        />
        <div className="ui grid container">
          {this.renderEachHog()}
        </div>
      </div>
    )
  }
}

export default HogContainer;
