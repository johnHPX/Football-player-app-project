import { View, Text, StyleSheet,Button } from 'react-native';
import BotaoNav from '../components/BotaoNav';


function TelaMain({navigation}) {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>Tela principal</Text>
      <BotaoNav title={'favoritos'} onPress={() => navigation.navigate('Favoritos')}/>
      <BotaoNav title={'Sair'} onPress={() => navigation.goBack()}/>
    </View>
  )
}


const styles = StyleSheet.create({

  view: {
    backgroundColor: '#f5f5f5'
  },

  text: {
    color: 'green'
  }

})


export default TelaMain
