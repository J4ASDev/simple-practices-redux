import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions/changeText'
import { bindActionCreators } from 'redux'

import './textChange.css'

class TextChange extends Component{
  render(){
    const { actions: { changeTextTrue, changeTextFalse }, changeText } = this.props
    return (
      <div className="containerTEXTCHANGE">
        <h3>Text Change</h3>
        {
          changeText ?
          (
              <div>
                <h5>Bye friend</h5>
                <button onClick={changeTextFalse}>Click Me</button>
              </div>
            ) :
            (
              <div>
                <h5>Hello friend</h5>
                <button onClick={changeTextTrue}>Click Me</button>
              </div>
          )
        }
      </div>
    )
  }
}

function mapStateToProps (state) {
  const { changeText } = state
  return {
    changeText
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TextChange);