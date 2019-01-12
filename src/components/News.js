import React from 'react'

export default class News extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      title: '这是News组件'
    }
  }

  render () {
    return (
      <div>
        <h1>{ this.state.title }</h1>
      </div>
    )
  }
}
