import React, {useState} from 'react'
import { View, StyleSheet, TextInput, Button, Alert } from 'react-native'

export const AddTodo = ({ onSubmit }) => {
  const [value, setValue] = useState('')
  
  const pressHandler = () => {
    if(value.trim()) {
      onSubmit(value);
      setValue('');
    }else{
      Alert.alert('Name of the deal cannot be blank')
    }
  } 

  return(
    <View style={styles.block}>
      <TextInput 
        style={styles.input}
        onChangeText={setValue} 
        value={value}
        placeholder="Enter your deal"/>
      <Button style={styles.button} title='Add' onPress={pressHandler}/>
    </View>
  )
}

const styles = StyleSheet.create({
  block: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  button: {
    width: '100%'
  },
  input: {
    width: '80%',
    padding: 10,
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderBottomColor: '#3949ab',  
  }
}) 