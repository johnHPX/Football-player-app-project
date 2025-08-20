import { View, Text, StyleSheet, Image, TextInput } from 'react-native';
import BotaoNav from '../components/BotaoNav';

function TelaMain({navigation}) {
  return (
    <View style={styles.screen}>
      <Image source={require("../assets/bg.jpg")} style={styles.img} />
      <View style={styles.div}>
        <Text style={styles.text}>Pesquise Pelo Nome </Text>
        <TextInput style={styles.find} placeholder="Buscar jogador"/>
        <View style={styles.fix}>
          <BotaoNav title={'favoritos'} onPress={() => navigation.navigate('Favoritos')}/>
        </View>
        <BotaoNav title={'Sair'} onPress={() => navigation.goBack()}/>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({

  screen: {
    backgroundColor: '#F9FAFB',
    flex: 1,
  },


  img: {
      width: "100%",
      height: 200,
      marginBottom: "2%"
  },

  text: {
    color: '#1E3A8A',
    marginBottom: "5%",
    fontSize: 22,
    textAlign: "center"
  },

  find: {
      paddingVertical: 10,
      paddingHorizontal: 10,
      width: "90%",
      height: 50,
      alignSelf: "center",
      borderWidth: 1,
      borderColor: "#FACC15",
      backgroundColor: "#f5f5f5",
      fontSize: 15,
      borderRadius: 8,
      marginBottom: "5%"
  },

  fix: {
    marginBottom: "5%"
  }

})


export default TelaMain
