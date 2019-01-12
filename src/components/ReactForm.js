import React from 'react'

class ReactForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      sex: '男',
      city: '',
      cityList: ['广州', '北京', '上海', '深圳'],
      hobbyList: [
        { value: '篮球', checked: false },
        { value: '跳水', checked: false },
        { value: '开飞机', checked: false }
      ],
      textarea: ''
    }
  }

  handleUsernameChange = (e) => {
    this.setState({
      username: e.target.value,
    })
  }

  handleSexChange = (e) => {
    this.setState({
      sex: e.target.value,
    })
  }

  handleHobbyChange = (key) => {
    this.state.hobbyList[key].checked = !this.state.hobbyList[key].checked

    this.setState({
      hobbyList: this.state.hobbyList,
    })
  }

  handleSubmit = (e) => {
    console.log('姓名:', this.state.username)



    console.log('性别:', this.state.sex)
    console.log('爱好:', this.state.hobbyList.map((item) => {
      if (item.checked) {
        return item.value
      }
    }).join('、'))
  }

  render() {
    const state = this.state
    return (
      <div>
        <h1>React Form</h1>
        <hr />

        <div className="form">
          姓名：
          <input type="text" value={state.username} onChange={this.handleUsernameChange} />
          <br />
          <br />
          性别：
          <input type="radio" value="男" checked={state.sex === '男'} onChange={this.handleSexChange} />
男
          <input type="radio" value="女" checked={state.sex === '女'} onChange={this.handleSexChange} />
女

          <br />
          <br />

          {
            state.hobbyList.map((hobby, key) => (
              <span key={key}>
                { hobby.value }
                <input type="checkbox" value={hobby.value} checked={hobby.checked} onChange={this.handleHobbyChange.bind(this, key)} />
              </span>
            ))
          }

          <br />
          <br />
          <button onClick={this.handleSubmit}>提交</button>
        </div>
      </div>
    )
  }
}

export default ReactForm
