import { Text, TouchableHighlight } from "react-native"


function BotaoNav(title, onPress) {
  return (
    <TouchableHighlight style={styles.container} onPress={onPress}>
      <Text style={styles.txt}>{title}</Text>
    </TouchableHighlight>
  )
}


const styles = StyleSheet.create({

  container: {
    with: "80%",
  },

  txt: {
    color: 'black'
  }

})


export default BotaoNav;