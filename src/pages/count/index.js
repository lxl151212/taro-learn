import Taro, { Component } from '@tarojs/taro'
import { View, Button } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { bindActionCreators } from 'redux'
// import A from '../../components/A/A'
// import B from '../../components/B/B'

import * as Actions from '../../actions/counter'

import './index.less'

function mapStateToProps(state) {
  return {
    counter: state.counter.toJS()
  }
}
console.log('Actions', Actions)
function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators(Actions, dispatch)
  }
}
@connect(mapStateToProps, mapDispatchToProps)

export default class Count extends Component {

  config = {
    navigationBarTitleText: '首页11'
  }

  componentDidMount() {
    console.log('page didmount')
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    const { add, minus, asyncAdd, counter: { num } } = this.props
    console.log(this.props)
    return (
      <View className='index'>
        <Button className='add_btn' onClick={add}>+</Button>
        <Button className='dec_btn' onClick={minus}>-</Button>
        <Button className='dec_btn' onClick={asyncAdd}>async</Button>
        <View>{num}</View>
      </View>
    )
  }
}

/* <View>{this.props.counter.num}</View>
{this.state.x.map((item, index) => <A taroKey={index} t={item} onClick={this.goto} />)}
<B onClick={this.goto} />
<B onClick={this.goto} />
<Button onClick={this.goto}>走你</Button> */