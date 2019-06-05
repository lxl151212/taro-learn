import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import propTypes from 'prop-types'
import './test.less'

export default class Test extends Component {
  constructor(props) {
    // 最先执行的生命周期函数
    super(props)
    this.state = {
    }
  }
  config = {
    navigationBarTitleText: ''
  }
  componentWillMount() { }
  componentDidMount() { }
  componentWillUnmount() { }
  componentDidShow() { }
  componentDidHide() { }
  componentDidCatchError() { }
  componentDidNotFound() { }
  render() {
    let description
    if (this.props.foo % 2 == 0) {
      description = <Text>even</Text>
    } else {
      description = <Text>odd</Text>
    }
    return (
      <View className='test' onClick={this.parentFun}>
        {description}
      </View>
    )
  }
  parentFun() {
    this.props.onChildrenFun()
  }
}
// 提前绑定值
Test.propTypes = {
  foo: propTypes.number,
  onChildrenFun: propTypes.func
}
Test.defaultProps = {
  foo: 0,
  onChildrenFun: () => { },
}