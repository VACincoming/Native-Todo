import React, {useState} from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
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

  const deleteTodo = id => () => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }

  const onDone = todo => () => {
    const todosCopy = [...todos];
    const foundIndex = todosCopy.findIndex(elem => elem.id === todo.id);
    todosCopy[foundIndex].isDone = !todosCopy[foundIndex].isDone;
    console.log(todos)
    setTodos(todosCopy);
  }
  return (
    <View>
      <Navbar title="Todo-App"/>
      <View style={styles.container}>
        <AddTodo onSubmit={addTodo}/>
        <FlatList
          data={todos}
          renderItem={({ item }) => {
            return(
                <Todo title={item.title} id={item.id} onDone={onDone(item)} isDone={item.isDone} deleteTodo={deleteTodo(item.id)}/>
            )
          }}
          keyExtractor={todo => todo.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginBottom: 270
  }
});
