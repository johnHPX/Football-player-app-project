import { View, Text, StyleSheet, Button } from 'react-native';
import BotaoNav from '../components/BotaoNav';

function TelaFavoritos({navigation}) {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>Favoritos</Text>
      <BotaoNav title={'voltar'} onPress={() => navigation.goBack()}/>
    </View>
  )
}


const styles = StyleSheet.create({

  view: {
    backgroundColor: '#f5f5f5'
  },

  text: {
    color: 'red'
  }

})


export default TelaFavoritos
