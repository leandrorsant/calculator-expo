import React, { Component } from 'react'

import { TouchableOpacity, Text } from 'react-native'


const Button = ({value, btnStyle, onBtnClick}) => {
    return (
      <TouchableOpacity style={btnStyle} onPress={onBtnClick}>
        <Text style={{fontSize:45}}>{value}</Text></TouchableOpacity>
    )
  
}

export default Button