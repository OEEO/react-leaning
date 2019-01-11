import React from 'react'
import '../less/Home.less'

class Home extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      title: '我是Home组件',
      age: 20,
      url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547198241488&di=caf4e88cd1d819a69a9c55e58429ea3e&imgtype=0&src=http%3A%2F%2Fh.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F2f738bd4b31c87018e9450642a7f9e2f0708ff16.jpg'
    }
  }

  render () {
    return (
      <div>
        <h1 className='red'>{ this.state.title }</h1>
        <div>{ this.state.name }</div>
        <div>{ this.state.age }</div>
        <div>疑似地上霜。</div>
        <div>疑似地上霜。</div>
        <img src={ this.state.url } alt={'你好'} />
      </div>
    )
  }
}

export default Home
