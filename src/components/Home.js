import React from 'react'
import { Button } from 'antd'
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
        <Button type="primary">按钮</Button>
      </div>
    )
  }
}

export default Home
