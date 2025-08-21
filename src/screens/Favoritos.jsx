import { View, Text, StyleSheet, ScrollView } from 'react-native';
import BotaoNav from '../components/BotaoNav';
import CardAtleta from '../components/CardAtleta'

function TelaFavoritos({navigation}) {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>Meus Favoritos</Text>
      <ScrollView style={styles.scroll}>
      
      </ScrollView>
     <View style={styles.fixBtn}>
       <BotaoNav title={'voltar'} onPress={() => navigation.goBack()}/>
     </View>
    </View>
  )
}


const styles = StyleSheet.create({

  view: {
    backgroundColor: '#F9FAFB',
    flex: 1,
  },

  text: {
    color: '#10B981',
    fontSize: 25,
    textAlign: "center",
    marginTop: 10,
    marginBottom: 20
  },

  scroll: {
    flex: 1,
    paddingHorizontal: 10,
    marginTop: "2%"
  },
  
  fixBtn: {
    padding: 10,
    marginBottom: "15%"
  }

})


export default TelaFavoritos
