import React, {useState, useEffect} from 'react'
import {Text, View, StyleSheet, TouchableOpacity, Button} from 'react-native'

export const Todo = ({title, onDone, isDone, deleteTodo}) => {
  const [textDecorationLine, setTextDecoration] = useState('none');
  useEffect(() => {
    if(isDone) setTextDecoration('line-through')
    else setTextDecoration('none')
  }, [isDone])
  return (
    <View style={styles.todoWrapper}>
      <TouchableOpacity 
        onPress={onDone}
        style={[styles.todo, {textDecorationLine} ]}
      >
        <Text style={{textDecorationLine}}>{title}</Text>
      </TouchableOpacity>
      <Button title='Delete' onPress={() => deleteTodo(id)}/>
    </View>
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
  },
  todoWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  }
})