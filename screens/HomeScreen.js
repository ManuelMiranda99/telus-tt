import React from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Button from "../components/Button";
import { removeTodo } from "../store/todos";

export default function HomeScreen({ navigation }) {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const navigateToAddTodo = () => {
    navigation.navigate("AddTask");
  };

  const deleteTodo = (id) => {
    dispatch(removeTodo(id));
  };

  return (
    <View style={styles.container}>
      <Button text="Add Todo" onPress={navigateToAddTodo} />

      <FlatList
        data={todos}
        renderItem={({ item }) => (
          <Pressable onPress={() => deleteTodo(item.id)}>
            <View>
              <Text>{item.text}</Text>
            </View>
          </Pressable>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
