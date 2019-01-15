import React from 'react'
import CountItem from './CountItem'

class CountParent extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      amount: 0
    }
  }

  add = () => {
    this.setState({
      amount: ++this.state.amount
    })
  }

  minus = () => {
    this.setState({
      amount: --this.state.amount
    })
  }

  getData () {
    console.log(this.refs.CountItem.state.count)
  }

  render () {
    return (
      <div>
        <h1>合计：{ this.state.amount }</h1>
        <button onClick={(e) => this.getData(e)}>获取子组件的值</button>
        <CountItem add={this.add} minus={this.minus} ref="CountItem"/>
        <CountItem add={this.add} minus={this.minus} />
        <CountItem add={this.add} minus={this.minus} />
      </div>
    )
  }
}

export default CountParent
