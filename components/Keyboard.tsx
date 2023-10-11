import React from 'react'
import { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Button from './btn/Button'
import { styles
 } from './styles/styles'
import Display from './Display';
import { evaluate } from 'mathjs';



let value = "t"

function setValue(x){
    value = value + x;
}

const handleParenthesis = (str : string) => {
    
    let lastCharacter = ""
    if(str.charAt(str.length-1) == "(")
        return "("
    for (var i = 0; i < str.length-1; i++) {
        if(str.charAt(i) == '(' || str.charAt(i) == ')')
            lastCharacter = str.charAt(i)
    }
    if(lastCharacter == "("){
        return ")"
    }
    return "("
}

const calculate = (mathExp) => {
    if(mathExp == "" || mathExp == "=")
        return "";
    try{
        return evaluate(mathExp.replace(/x/, "*"));
    }catch(error){
        return "Error"
    }
    return "Error"
} 

function Keyboard() {
    const [mathExpression, setMathExpression] = useState("");
    const [history, setHistory] = useState("");

    return (
    
    <View>
        <Display textStyle={{textAlign:'right', fontSize: 20}} displayText={history}/>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Display textStyle={{textAlign:'right', fontSize: 50}} displayText={mathExpression}/>
        <View style={{flexDirection: 'row'}}>
            <Button btnStyle={styles.btnWhite} onBtnClick={()=>setMathExpression('')} value="AC"></Button>
            <Button btnStyle={styles.btnWhite} onBtnClick={()=>setMathExpression(mathExpression + handleParenthesis(mathExpression))} value="()"></Button>
            <Button btnStyle={styles.btnWhite} onBtnClick={()=>setMathExpression(mathExpression + '%')} value="%"></Button>
            <Button btnStyle={styles.btnWhite} onBtnClick={()=>setMathExpression(mathExpression + '/')} value="/"></Button>
        </View>
        <View style={{flexDirection: 'row'}}>
            <Button btnStyle={styles.btnWhite} onBtnClick={()=>setMathExpression(mathExpression + '7')} value="7"></Button>
            <Button btnStyle={styles.btnWhite} onBtnClick={()=>setMathExpression(mathExpression + '8')} value="8"></Button>
            <Button btnStyle={styles.btnWhite} onBtnClick={()=>setMathExpression(mathExpression + '9')} value="9"></Button>
            <Button btnStyle={styles.btnWhite} onBtnClick={()=>setMathExpression(mathExpression + 'x')} value="x"></Button>
        </View>
        <View style={{flexDirection: 'row'}}>
            <Button btnStyle={styles.btnWhite} onBtnClick={()=>setMathExpression(mathExpression + '4')} value="4"></Button>
            <Button btnStyle={styles.btnWhite} onBtnClick={()=>setMathExpression(mathExpression + '5')} value="5"></Button>
            <Button btnStyle={styles.btnWhite} onBtnClick={()=>setMathExpression(mathExpression + '6')} value="6"></Button>
            <Button btnStyle={styles.btnWhite} onBtnClick={()=>setMathExpression(mathExpression + '-')} value="-"></Button>
        </View>
        <View style={{flexDirection: 'row'}}>
            <Button btnStyle={styles.btnWhite} onBtnClick={()=>setMathExpression(mathExpression + '1')} value="1"></Button>
            <Button btnStyle={styles.btnWhite} onBtnClick={()=>setMathExpression(mathExpression + '2')} value="2"></Button>
            <Button btnStyle={styles.btnWhite} onBtnClick={()=>setMathExpression(mathExpression + '3')} value="3"></Button>      
            <Button btnStyle={styles.btnWhite} onBtnClick={()=>setMathExpression(mathExpression + '+')} value="+"></Button>
        </View>
        <View style={{flexDirection: 'row'}}>
            <Button btnStyle={styles.btnWhite} onBtnClick={()=>setMathExpression(mathExpression + '0')} value="0"></Button>
            <Button btnStyle={styles.btnWhite} onBtnClick={()=>alert('.')} value="."></Button>
            <Button btnStyle={styles.btnWhite} onBtnClick={() =>setMathExpression(mathExpression.substring(0, mathExpression.length - 1))} value="⌫"></Button>
            <Button btnStyle={styles.btnWhite} 
                onBtnClick={()=>{
                    const result = calculate(mathExpression);
                    setHistory(history+"\n"+mathExpression+"="+result);
                    setMathExpression(result);
                }} value="="></Button>
        </View>
    </View>
  )
}

export default Keyboard