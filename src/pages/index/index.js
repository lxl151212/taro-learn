/* eslint-disable react/no-unused-state */
import Taro, { Component, getApp } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './index.less'
import Test from '../test/test'

let app = getApp()
export default class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [1, 2, 3],
      currIndex: 0,
      counter: 0,
      returnData: ''
    }
  }
  config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount() {
  }
  componentDidMount() {
    this.setState({
      returnData: this.returnDataFun()
    })
    console.log(app.state.a)
  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() {
  }
  indexGo() { }
  render() {
    return (
      <View className='index-box'>
        <View className='item-box'>
          {this.state.list.map((Listitem, Listindex) => {
            return (
              <View
                className={`item ${this.state.currIndex === Listindex ? 'curr' : ''}`}
                key={Listindex} data-id={Listindex} onClick={this.haddleItemClick}
              >{Listitem}</View>
            )
          })}
        </View>
        <Test foo={1 + 2 + 4} onChildrenFun={this.testChildrenVal}></Test>
        <View className='stateStyle' onClick={this.stateUpdate}>测试数据state的更新{this.state.returnData}</View>
      </View>
    )
  }
  haddleItemClick(e) {
    this.setState({
      currIndex: e.target.dataset.id
    })
  }
  stateUpdate() {
    this.setState({
      counter: 1
    })
  }
  testChildrenVal() {
    console.log(111111)
    // Taro.showToast({
    //   title: '111'
    // })
  }
  returnDataFun() {
    return 5
  }
}
