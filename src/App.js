import React from 'react'
import './assets/less/App.css'
import ToDoList from './components/ToDoList'
import CountParent from './components/CountParent'

import Home from './components/Home'
import About from './components/About'
import News from './components/News'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class App extends React.Component {
  render () {
    return (
      <Router>
        <div className="app">
          <nav>
            <Link to="/">首页</Link>
            <Link to="/News">新闻</Link>
            <Link to="/About">关于</Link>
          </nav>

          <Route component={Home}
              exact
              path="/"
          />
          <Route component={News}
              path="/News"
          />
          <Route component={About}
              path="/About"
          />
        </div>
      </Router>
    )
  }
}

export default App
