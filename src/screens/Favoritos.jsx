import { View, Text, StyleSheet, Button } from 'react-native';
import BotaoNav from '../components/BotaoNav';

function TelaFavoritos({navigation}) {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>Meus Favoritos</Text>
      <BotaoNav title={'voltar'} onPress={() => navigation.goBack()}/>
    </View>
  )
}


const styles = StyleSheet.create({

  view: {
    backgroundColor: '#F9FAFB'
  },

  text: {
    color: '#10B981',
    fontSize: 25,
    textAlign: "center",
    marginTop: 10,
    marginBottom: 20
  }

})


export default TelaFavoritos
