import React, { useState } from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/todos";
import uuid from "react-native-uuid";
import Button from "../components/Button";

export default function AddTaskScreen({ route, navigation }) {
  const dispatch = useDispatch();

  const [newTodo, setNewTodo] = useState();

  const handleChangeTodo = (todo) => {
    setNewTodo(todo);
  };

  const submitTodo = () => {
    dispatch(
      addTodo({
        id: uuid.v4(),
        text: newTodo,
      })
    );
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={handleChangeTodo}
        value={newTodo}
      />

      <Button text="+" onPress={submitTodo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    paddingHorizontal: 4,
    paddingVertical: 16,
    fontSize: 16,
    borderRadius: 8,
    backgroundColor: "#FFFFFF",
  },
});
