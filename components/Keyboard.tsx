import React from 'react'
import { Text, View } from 'react-native';
import Button from './btn/Button'
import { styles
 } from './styles/styles'


function Keyboard() {
  return (
    <View>
        <View style={{flexDirection: 'row'}}>
            <Button btnStyle={styles.btnWhite} onBtnClick={()=>alert('AC')} value="AC"></Button>
            <Button btnStyle={styles.btnWhite} onBtnClick={()=>alert('()')} value="()"></Button>
            <Button btnStyle={styles.btnWhite} onBtnClick={()=>alert('%')} value="%"></Button>
            <Button btnStyle={styles.btnWhite} onBtnClick={()=>alert('/')} value="/"></Button>
        </View>
        <View style={{flexDirection: 'row'}}>
            <Button btnStyle={styles.btnWhite} onBtnClick={()=>alert('7')} value="7"></Button>
            <Button btnStyle={styles.btnWhite} onBtnClick={()=>alert('8')} value="8"></Button>
            <Button btnStyle={styles.btnWhite} onBtnClick={()=>alert('9')} value="9"></Button>
            <Button btnStyle={styles.btnWhite} onBtnClick={()=>alert('x')} value="x"></Button>
        </View>
        <View style={{flexDirection: 'row'}}>
            <Button btnStyle={styles.btnWhite} onBtnClick={()=>alert('4')} value="4"></Button>
            <Button btnStyle={styles.btnWhite} onBtnClick={()=>alert('5')} value="5"></Button>
            <Button btnStyle={styles.btnWhite} onBtnClick={()=>alert('6')} value="6"></Button>
            <Button btnStyle={styles.btnWhite} onBtnClick={()=>alert('%')} value="-"></Button>
        </View>
        <View style={{flexDirection: 'row'}}>
            <Button btnStyle={styles.btnWhite} onBtnClick={()=>alert('3')} value="3"></Button>
            <Button btnStyle={styles.btnWhite} onBtnClick={()=>alert('2')} value="2"></Button>
            <Button btnStyle={styles.btnWhite} onBtnClick={()=>alert('1')} value="1"></Button>
            <Button btnStyle={styles.btnWhite} onBtnClick={()=>alert('+')} value="+"></Button>
        </View>
        <View style={{flexDirection: 'row'}}>
            <Button btnStyle={styles.btnWhite} onBtnClick={()=>alert('0')} value="0"></Button>
            <Button btnStyle={styles.btnWhite} onBtnClick={()=>alert('.')} value="."></Button>
            <Button btnStyle={styles.btnWhite} onBtnClick={()=>alert('⌫')} value="⌫"></Button>
            <Button btnStyle={styles.btnWhite} onBtnClick={()=>alert('=')} value="="></Button>
        </View>
    </View>
  )
}

export default Keyboard