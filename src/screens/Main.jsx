import { View, Text, StyleSheet, Image, TextInput, ScrollView } from 'react-native';
import BotaoNav from '../components/BotaoNav';
import { useState } from 'react';
import BotaoSubmit from '../components/BotaoSubmit';
import CardAtleta from '../components/CardAtleta'

function TelaMain({navigation}) {
  const [name, setName] = useState("")

  return (
    <View style={styles.screen}>
      
      <View>
        <Image source={require("../assets/bg.jpg")} style={styles.img} />
        <Text style={styles.text}>Pesquise Pelo Nome </Text>

        <TextInput
          style={styles.find}
          placeholder="Buscar jogador"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        
        <BotaoSubmit title={'Buscar'} />
      </View>

      <ScrollView style={styles.scroll}>
        <CardAtleta nome={"Cristiano Ronaldo"} time={"Al Nassr FC"} esporte={"Soccer"} sexo={"Male"} nacionalidade={"Portugal"} data={"1985-02-05"}/>
        <CardAtleta nome={"Lionel Messi"} time={"Inter Miami"} esporte={"Soccer"} sexo={"Male"} nacionalidade={"Argentina"} data={"1987-06-24"}/>
        <CardAtleta nome={"Neymar Jr"} time={"Al-Hilal"} esporte={"Soccer"} sexo={"Male"} nacionalidade={"Brasil"} data={"1992-02-05"}/>
      </ScrollView>


      <View style={styles.footer}>
         <BotaoNav title={'Favoritos'} onPress={() => navigation.navigate('Favoritos')}/>
          <Text style={styles.fixBTN}></Text>
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

  scroll: {
    flex: 1,
    paddingHorizontal: 10,
    marginTop: "2%"
  },

  footer: {
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: "#e5e5e5",
    backgroundColor: "#fff",
    flexDirection: "row-reverse",
    justifyContent: "center",
    marginBottom: "15%"
  },

  fixBTN: {
    marginHorizontal: 3
  }

})

export default TelaMain
