import { Pressable, StyleSheet, Text } from "react-native";

export default function Feature_buttons({ title, ...props }) {
  return (
    <Pressable {...props}>
      <Text>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({});
