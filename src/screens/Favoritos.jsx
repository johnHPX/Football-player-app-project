import { View, Text, StyleSheet, ScrollView } from 'react-native';
import BotaoNav from '../components/BotaoNav';
import CardAtleta from '../components/CardAtleta'

function TelaFavoritos({navigation}) {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>Meus Favoritos</Text>
      <ScrollView style={styles.scroll}>
        <CardAtleta nome={"Cristiano Ronaldo"} time={"Al Nassr FC"} esporte={"Soccer"} sexo={"Male"} nacionalidade={"Portugal"} data={"1985-02-05"}/>
        <CardAtleta nome={"Lionel Messi"} time={"Inter Miami"} esporte={"Soccer"} sexo={"Male"} nacionalidade={"Argentina"} data={"1987-06-24"}/>
        <CardAtleta nome={"Neymar Jr"} time={"Al-Hilal"} esporte={"Soccer"} sexo={"Male"} nacionalidade={"Brasil"} data={"1992-02-05"}/>
        <CardAtleta nome={"Cristiano Ronaldo"} time={"Al Nassr FC"} esporte={"Soccer"} sexo={"Male"} nacionalidade={"Portugal"} data={"1985-02-05"}/>
        <CardAtleta nome={"Cristiano Ronaldo"} time={"Al Nassr FC"} esporte={"Soccer"} sexo={"Male"} nacionalidade={"Portugal"} data={"1985-02-05"}/>
        <CardAtleta nome={"Cristiano Ronaldo"} time={"Al Nassr FC"} esporte={"Soccer"} sexo={"Male"} nacionalidade={"Portugal"} data={"1985-02-05"}/>
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
