import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions/count'
import { bindActionCreators } from 'redux'

import './counter.css'

class Counter extends Component {
  
  render() {
    const { actions: { onIncrement, onDecrement }, number } = this.props
    return (
      <div className="containerCOUNTER">
        <div>  
          <h3>Counter</h3>
        </div>
        <div>
          <button onClick={onDecrement}> - </button>
          <span>{number}</span>
          <button onClick={onIncrement}> + </button>
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  const { count: { number } } = state

  return {
    number
  }
}

function mapDispatchToProps (dispatch){
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)