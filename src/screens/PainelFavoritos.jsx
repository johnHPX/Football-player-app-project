import { View, Text, StyleSheet, ScrollView } from 'react-native';
import BotaoNav from '../components/BotaoNav';
import { useEffect, useState } from 'react';
import { getFavorites } from '../storage/favorites';
import CardAtleta from '../components/CardAtleta';
import { removeFavorite } from '../storage/favorites';
import AvisoNotFound from '../components/AvisoNotFound';

function TelaFavoritos({navigation}) {
  const [list, setList] = useState([])

  async function loadStorage() {
    const result = await getFavorites()
    setList(result)
  }

  useEffect(() => {
    loadStorage()
  }, [])

  return (
    <View style={styles.view}>
      <Text style={styles.text}>Meus Favoritos</Text>

      {
        list.length === 0? 
        <AvisoNotFound/> 
        :
        <ScrollView style={styles.scroll}>
          {list.map(item => (
            <CardAtleta
              key={item.idPlayer}
              item={item}
              btn={{
                title: "Remover dos Favoritos",
                color: "#9CA3AF",
                onPress: async () => {
                  await removeFavorite(item.idPlayer);
                  setList(list.filter(f => f.idPlayer !== item.idPlayer));
                }
              }}
            />
          ))}
        </ScrollView>
      }

      

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
