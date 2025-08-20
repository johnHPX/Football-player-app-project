import { View, Text, StyleSheet, Image, TextInput } from 'react-native';
import BotaoNav from '../components/BotaoNav';
import { useState } from 'react';
import BotaoSubmit from '../components/BotaoSubmit';
import CardAtleta from '../components/CardAtleta'

function TelaMain({navigation}) {
  const [name, setName] = useState("")


  return (
    <View style={styles.screen}>
      <Image source={require("../assets/bg.jpg")} style={styles.img} />
      <View>
        <Text style={styles.text}>Pesquise Pelo Nome </Text>

        <TextInput
          style={styles.find}
          placeholder="Buscar jogador"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        
        <BotaoSubmit title={'Buscar'} />

        <View style={styles.divAjust}>
          <CardAtleta nome={"Cristiano Ronaldo"} time={"Al Nassr FC"} esporte={"Soccer"} sexo={"Male"} nacionalidade={"Portugal"} data={"1985-02-05"}/>
        </View>


        <View>
          <View style={styles.fixBTN}>
            <BotaoNav title={'favoritos'} onPress={() => navigation.navigate('Favoritos')}/>
          </View>
          <BotaoNav title={'Sair'} onPress={() => navigation.goBack()}/>
        </View>
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
      height: 100,
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

  divAjust: {
    marginTop: "10%",
    marginBottom: "10%"
  },

  fixBTN: {
    marginTop: "5%",
    marginBottom: "5%"
  }


})


export default TelaMain
