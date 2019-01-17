import React from 'react'
import { Link } from 'react-router-dom'

class News extends React.Component {
  static defaultProps = {}

  static propTypes = {}

  constructor(props) {
    super(props)

    this.state = {
      routerList: [
        { title: '111', aid: 111 },
        { title: '222', aid: 222 },
        { title: '333', aid: 333 },
        { title: '333', aid: 333 }
      ]
    }
  }

  render() {

    return (
      <div>
        <ul>
          {
            this.state.routerList.map((item, key) => {
              return (
                <li key={key}>
                  <Link to={`/content/${item.aid}`}>{item.title}</Link>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default News
