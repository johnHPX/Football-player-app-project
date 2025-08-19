import { View, Text, StyleSheet, Button } from 'react-native';

function TelaFavoritos({navigation}) {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>Favoritos</Text>
      <Button title='Voltar para a tela principal' onPress={() => navigation.goBack()}/>
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