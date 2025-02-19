import React from 'react'
import {getAll} from '../data/pets.js'

console.log(getAll());
class Filters extends React.Component {

  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select onChange={(e) => this.props.onChangeType(e.target.value)} name="type" id="type">
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button onClick={() => this.props.onFindPetsClick(getAll())} className="ui secondary button">Find pets</button>
        </div>
      </div>
    )
  }
}

export default Filters
