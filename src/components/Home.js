import React from 'react'

class Home extends React.Component {
  static defaultProps = {}

  static propTypes = {}

  constructor(props) {
    super(props)

    this.state = {
      name: '你好'
    }
  }

  render() {

    return (
      <div>
        Home 组件
      </div>
    )
  }
}

export default Home
