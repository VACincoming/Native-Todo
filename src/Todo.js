import React, {useState, useEffect} from 'react'
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native'

export const Todo = ({title, onDone, isDone}) => {
  const [textDecorationLine, setTextDecoration] = useState('none');
  useEffect(() => {
    console.log(isDone)
    if(isDone) setTextDecoration('line-through')
    else setTextDecoration('none')
  }, [isDone])
  return (
    <TouchableOpacity 
      onPress={onDone}
      style={[styles.todo, {textDecorationLine} ]}
    >
      <View>
        <Text style={{textDecorationLine}}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  todo: {
    flexDirection: 'row',
    flexGrow: 1,
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 5,
    marginRight: 10
  },
  isDone: {
    textDecorationLine: 'line-through'
  }
})