import React from 'react'
import {db} from './src/config';
import ToDoItem from './src/ToDoItem'
import {Navbar} from './src/Navbar'
import {
  StyleSheet,
  Alert,
  View,
  Button,
  FlatList,
  TextInput,
} from 'react-native';
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: {},
      presentToDo: '',
    };
  }
  componentDidMount() {
    db.ref('/todos').on('value', querySnapShot => {
      let data = querySnapShot.val() ? querySnapShot.val() : {};
      let todoItems = {...data};
      this.setState({
        todos: todoItems,
      });
    });
  }
  
  addNewTodo() {
    db.ref('/todos').push({
      done: false,
      todoItem: this.state.presentToDo,
    });
    Alert.alert('Action!', 'A new To-do item was created');
    this.setState({
      presentToDo: '',
    });
  }
  clearTodos(id) {
    db.ref('/todos').child(id).remove()
  }
  render() {
    let todosKeys = Object.keys(this.state.todos);
    return (
      <View>
        <Navbar title="Todo-App"/>
        <View style={styles.container}>
          <View style={styles.block}>
            <TextInput 
              placeholder="Add new Todo" 
              value={this.state.presentToDo}
              style={styles.input}
              onChangeText={e => {
                this.setState({
                  presentToDo: e,
                });
              }}
              onSubmitEditing = {() => this.addNewTodo()}
            />
            <Button 
              width="100%"
              title='Add'
              onPress={() => this.addNewTodo()}
            />
          </View>
          
            <FlatList
              data={todosKeys}
              renderItem={({ item }) => {
                return(
                  <View style={styles.todoWrapper}>
                  <ToDoItem 
                    key={item}
                    id={item}
                    todoItem={this.state.todos[item]}
                    clearTodos={() => clearTodos(item)}
                  />
                  <Button title='Delete' onPress={() => this.clearTodos(item)} />
                  </View>
                )
              }}
              keyExtractor={item => item}
            />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  todoWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  container: {
    padding: 10,
    marginBottom: 270,
  },
  contentContainerStyle: {
    alignItems: 'center',
  },
  block: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  input: {
    width: '80%',
    padding: 10,
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderBottomColor: '#3949ab',  
  },
  todoItem: {
    flexDirection: 'row',
    marginVertical: 10,
    alignItems: 'center',
  },
  todoText: {
    borderColor: '#afafaf',
    paddingHorizontal: 5,
    paddingVertical: 7,
    borderWidth: 1,
    borderRadius: 5,
    marginRight: 10,
    minWidth: '50%',
    textAlign: 'center',
  },
});