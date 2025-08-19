import { View, Text, StyleSheet,Button } from 'react-native';
// import BotaoNav from '../components/BotaoNav';


function TelaLogin({navigation}) {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>Login!</Text>
      <Button title="Ir para a main" onPress={() => navigation.navigate('Main') } />
    </View>
  )
}


const styles = StyleSheet.create({

  view: {
    backgroundColor: '#f5f5f5',
    flex: 1,
    justifyContent: 'space-around',
    alignContent: 'center'
  },

  text: {
    color: 'blue',
    fontSize: 34,
    textAlign: "center"
  },

})


export default TelaLogin