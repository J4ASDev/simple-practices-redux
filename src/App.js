import React, { Component } from 'react'

//Components
import Counter from './components/counter'
import TextChange from './components/textChange'
import Songs from './components/songs'


//Styles
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="container">
        <Counter />
        <TextChange />
        <Songs />
      </div>
    );
  }
}

export default App;
