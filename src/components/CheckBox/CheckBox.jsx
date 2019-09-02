import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './style.scss';
export default class CheckBox extends React.Component{
  constructor(props){
    super(props)
  }
  render() {
    return(
      <div>

      </div>
    )
  }
}
CheckBox.propTypes={
  //只在单独使用时有效。可以使用 v-model 双向绑定数据
  value:PropTypes.string,
  //只在组合使用时有效。指定当前选项的 value 值，组合会自动判断是否选中
  label:PropTypes.string,
  //disabled
  disabled:PropTypes.bool,
  trueValue:PropTypes.string,
  falseValue:PropTypes.string
};