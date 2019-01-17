import React from 'react'

class Content extends React.Component {
  static defaultProps = {}

  static propTypes = {}

  constructor(props) {
    super(props)

    this.state = {}
  }

  componentDidMount () {
    console.log(this.props.match.params.aid)
  }

  render() {

    return (
      <div>
        新闻详情页
        { this.props.match.params.aid }
      </div>
    )
  }
}

export default Content
