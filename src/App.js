import React from 'react'
import './assets/less/App.css'
import Home from './components/Home'
import News from './components/News'
import ReactForm from './components/ReactForm'
import ToDoList from './components/ToDoList'

class App extends React.Component {
  render () {
    return (
      <div className="App">
        {/*<ReactForm/>*/}
        <ToDoList/>
      </div>
    )
  }
}

export default App
