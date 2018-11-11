import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../actions/songs'

import './songs.css'

class Songs extends Component {
  
  handleFormSubmit = (event) => {
    const { Songs } = this.props.actions
    event.preventDefault()
  
    Songs(this.input.value)
  }
  
  render() {
    const { songs } = this.props
    return (
      <div className="containerFORM">
        <h3>Add Songs</h3>
        <form onSubmit={this.handleFormSubmit}>
          <input 
            type="text" 
            name="username" 
            ref={elemente => (this.input = elemente)}
            placeholder="Name of the song"
            formMethod="post"
          />
        </form>
        <div className="containerFORM-songs">
          { songs.map((songs, index) => (<input value={songs.title} key={index} readOnly/> ) ) }
        </div>
      </div>
    )
  }
}

function mapStateToProps (state, props){
  const { songs } = state

  return {
    songs
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Songs)