import React from 'react'

class CountItem extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      count: 0
    }
  }

  add = () => {
    this.setState({
      count: ++this.state.count
    })
    this.props.add()
  }

  minus = () => {
    this.setState({
      count: --this.state.count
    })
    this.props.minus()
  }

  shouldComponentUpdate () {
    console.log('shouldComponentUpdate')
    return true
  }

  componentWillUpdate () {
    console.log('componentWillUpdate')
  }

  componentDidUpdate () {
    console.log('componentDidUpdate')
  }


  render () {
    return (
      <div>
        <span style={{width: '25px', textAlign: 'center', display: 'inline-block'}}>{this.state.count}</span>
        <button onClick={this.add}>增加</button>
        <button onClick={this.minus}>减少</button>
      </div>
    )
  }
}

export default CountItem
