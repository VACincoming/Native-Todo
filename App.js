import React, {useState} from 'react';
import { StyleSheet, Button, View, ScrollView } from 'react-native';
import {Navbar} from './src/Navbar'
import {AddTodo} from './src/AddTodo'
import {Todo} from './src/Todo'

export default function App() {
  const [todos, setTodos] = useState([])
  const addTodo = title => {
    setTodos(prev => [
      ...prev, {
        id: Date.now().toString(),
        isDone: false,
        title,
    }])
  }

  const deleteTodo = id => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }

  const onDone = todo => () => {
    const todosCopy = [...todos];
    const foundIndex = todosCopy.findIndex(elem => elem.id === todo.id);
    todosCopy[foundIndex].isDone = !todosCopy[foundIndex].isDone;
    setTodos(todosCopy);
  }
  return (
    <View>
      <Navbar title="Todo-App"/>
      <View style={styles.container}>
        <AddTodo onSubmit={addTodo}/>
        <ScrollView>
          {todos.map(todo => {
            return(
              <View key={todo.id} style={styles.todoWrapper}>
                <Todo title={todo.title} onDone={onDone(todo)} isDone={todo.isDone}/>
                <Button title='Delete' onPress={() => deleteTodo(todo.id)}/>
              </View>
          )})}  
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  todoWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  }
});
