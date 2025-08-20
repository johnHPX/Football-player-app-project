import { Text, TouchableHighlight, StyleSheet } from "react-native"


function BotaoSubmit({title, onPress}) {
  return (
    <TouchableHighlight style={styles.container} onPress={onPress}>
      <Text style={styles.txt}>{title}</Text>
    </TouchableHighlight>
  )
}


const styles = StyleSheet.create({

  container: {
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "#3B82F6",
    width: "60%",
    alignSelf: "center",
    borderRadius: 10,
    elevation: 5
  },

  txt: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
    color: "#fff",
    textTransform: "uppercase"
  }

})


export default BotaoSubmit;
