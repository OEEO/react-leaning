import React from 'react'
import '../less/Home.less'

class Home extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      title: '我是Home组件',
      username: '床前明月光',
      age: 20,
      list: [1, 2, 3, 4, 5, 6, 7]
    }
  }

  run (item) {

    alert(item)
  }

  changeTheTitle (title) {
    this.setState({
      title: title
    })
  }

  onUsernameChange = (e) => {
    console.log(e);
    this.setState({
      username: e.target.value
    })
  }

  setUsername = () => {
    this.setState({
      username:  '你好啊'
    })
  }

  onKeyUp =(e) => {
    if (e.keyCode === 13) {
      alert(e.target.value)




    }
  }

  render () {
    let list = this.state.list

    return (
      <div>
        <h1 className='red'>{ this.state.title }</h1>
        <div style={{color: 'red'}}>{ this.state.age }</div>
        <img className='img' src={ require('../assets/images/1.jpg') } alt={'你好'} />
        <div className='list' >
          {
            list.map(item => <div key={item} onClick={this.run.bind(item)}>{item + '1111'}</div>)
          }
        </div>
        <input type="text" value={this.state.username} onChange={this.onUsernameChange}/>
        <div>名字：{ this.state.username }</div>
        <div>
          <button onClick={this.setUsername}>改变username</button>
        </div>
      </div>
    )
  }
}

export default Home
