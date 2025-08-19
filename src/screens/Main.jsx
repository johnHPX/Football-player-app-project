import { View, Text, StyleSheet,Button } from 'react-native';


function TelaMain({navigation}) {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>Tela principal</Text>
      <Button title='Ir para favoritos' onPress={() => navigation.navigate('Favoritos')}/>
      <Button title='Voltar para a tela de Login' onPress={() => navigation.goBack()}/>
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