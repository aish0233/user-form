import React, { Component} from 'react'
import './App.css'
import Form from './components/Form'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>USER REGISTRATION FORM</h1>
        <h3>Select the course you want to take</h3>
        <Form/>
      </div>
  )
}
}

export default App;
