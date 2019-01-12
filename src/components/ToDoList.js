import React from 'react'

class ToDoList extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      list: [],
      newToDoTitle: ''
    }
  }

  toDoChange (key, item) {
    item.checked = !item.checked
    this.setState({
      list: this.state.list
    })
  }

  delCurToDo (key) {
    let list = this.state.list
    list.splice(key, 1)
    this.setState({
      list
    })
  }

  addToDo () {
    let title = this.state.newToDoTitle
    this.state.list.push({
      title: title,
      checked: false
    })
    this.setState({
      list: this.state.list,
      newToDoTitle: ''
    })
  }
  newToDoTitleChange (e) {
    this.setState({
      newToDoTitle: e.target.value
    })
  }

  toDoTitleKeyUp (e) {
    if (e.keyCode === 13) {
      this.addToDo()
    }
  }

  componentDidMount () {
    let list = JSON.parse(localStorage.getItem('toDoList')) || []
    this.setState({
      list
    })
  }

  componentDidUpdate () {
    let list = JSON.stringify(this.state.list)
    localStorage.setItem('toDoList', list)
  }

  render () {
    let state = this.state
    return (
      <div>
        <input onKeyUp={this.toDoTitleKeyUp.bind(this)} type="text" value={state.newToDoTitle} onChange={this.newToDoTitleChange.bind(this)}/>
        <button onClick={this.addToDo.bind(this)}>添加</button>
        <br/><br/><br/>
        <hr/>
        <h1>待办事项</h1>
        <ul>
          {
            state.list.map((item, key) => {
              if (!item.checked) {
                return (
                  <li key={key}>
                    <input type="checkbox" checked={item.checked} onChange={this.toDoChange.bind(this, key, item)}/>
                    { item.title }
                    <button onClick={this.delCurToDo.bind(this, key)}>删除</button>
                  </li>
                )
              }
            })
          }
        </ul>
        <hr/>

        <h1>完成事项</h1>
        <ul>
          {
            state.list.map((item, key) => {
              if (item.checked) {
                return (
                  <li key={key}>
                    <input type="checkbox" checked={item.checked} onChange={this.toDoChange.bind(this, key, item)}/>
                    { item.title }
                    <button onClick={this.delCurToDo.bind(this, key)}>删除</button>
                  </li>
                )
              }
            })
          }
        </ul>
      </div>
    )
  }
}

export default ToDoList
