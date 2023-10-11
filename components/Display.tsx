import React from 'react'
import { Text } from 'react-native'


const Display = ({displayText, textStyle} ) => {
  return (
    <Text style={textStyle}>{displayText}</Text>
  )
}

export default Display