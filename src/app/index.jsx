import { Image, StyleSheet, Text, View } from "react-native";
import Feature_buttons from "../components/feature_buttons";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.titleSection}>
        <Text style={styles.titleText}>Total</Text>
        <Image
          source={require("./../../assets/images/pkm_logo.png")}
          style={{ width: 170, height: 80 }}
        />
        <Text>Trivia!</Text>
      </View>

      <View style={styles.middleSection}>
        <Feature_buttons title="Learn Basics"></Feature_buttons>
        <Feature_buttons title={"Test Your Knowledge"}></Feature_buttons>
      </View>

      <View style={styles.bottomSection}>
        <Feature_buttons title={"View Pokemon"}></Feature_buttons>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  titleSection: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  middleSection: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});
