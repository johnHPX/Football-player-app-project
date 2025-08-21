import { View, Text, StyleSheet, Image, TextInput, ScrollView, FlatList } from 'react-native';
import BotaoNav from '../components/BotaoNav';
import { useEffect, useState } from 'react';
import BotaoSubmit from '../components/BotaoSubmit';
import CardAtleta from '../components/CardAtleta'

import {searchPlayers} from '../services/player'

function TelaMain({navigation}) {
  const [name, setName] = useState(null)
  const [value, setValue] = useState(null)
  const [players, setPlayers] = useState([])
  
  useEffect(() => {

    if (value === null){
      return
    }

    async function analiseData() {
        try{
          const dados = await searchPlayers(value)
          setPlayers(dados)
        }catch (err){
            console.log(`Erro: ${err}`)
        }
    }

    analiseData()

    console.log(players)

  }, [value])

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
        
        <BotaoSubmit title={'Buscar'}  onPress={() => {setValue(name)}}/>
      </View>

      <ScrollView style={styles.scroll}>
          
      </ScrollView>

      <FlatList
        data={players}
        keyExtractor={(item) => item.idPlayer}
        renderItem={({ item }) => <CardAtleta item={item} isFavorito={false} />}
      >

      </FlatList>


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
