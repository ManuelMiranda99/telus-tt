import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";

const Button = ({ text, onPress }) => {
  return (
    <Pressable onPress={onPress} style={styles.button}>
      <View>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 6,
    backgroundColor: "lightblue",
    paddingVertical: 6,
    paddingHorizontal: 8,
  },
  buttonText: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default Button;
