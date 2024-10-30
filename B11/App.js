import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);

  const addTask = () => {
    if (task.length > 0) {
      setTaskList([...taskList, { key: Math.random().toString(), text: task, completed: false }]);
      setTask('');
    }
  };

  const toggleComplete = (taskKey) => {
    setTaskList((prevTasks) =>
      prevTasks.map((taskItem) =>
        taskItem.key === taskKey ? { ...taskItem, completed: !taskItem.completed } : taskItem
      )
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo List</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add a task"
          value={task}
          onChangeText={(text) => setTask(text)}
          placeholderTextColor="#aaa"
        />
        <Button title="Add" onPress={addTask} color="#6200ea" />
      </View>
      <FlatList
        data={taskList}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => toggleComplete(item.key)}>
            <Text style={[styles.task, item.completed ? styles.completedTask : null]}>{item.text}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.key}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderColor: '#6200ea',
    borderWidth: 2,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    backgroundColor: '#fff',
  },
  task: {
    padding: 15,
    fontSize: 18,
    backgroundColor: '#fff',
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    marginBottom: 5,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  completedTask: {
    textDecorationLine: 'line-through',
    color: '#888',
    opacity: 0.5,
  },
});