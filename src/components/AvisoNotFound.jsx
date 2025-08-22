import { Text, StyleSheet, Image, View } from "react-native";

export default function AvisoNotFound() {
  return (
    <View style={styles.container}>
      <Image 
        source={require("../assets/searchNotFound.png")} 
        style={styles.img} 
        resizeMode="contain"
      />
      <Text style={styles.text}>Nenhum jogador encontrado :/ </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: 120,
    height: 120,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: "#374151",
  }
});
