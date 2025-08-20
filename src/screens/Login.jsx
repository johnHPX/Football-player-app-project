import { View, Text, StyleSheet,Button, TextInput } from 'react-native';
import BotaoNav from '../components/BotaoNav';


function TelaLogin({navigation}) {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>Entre com sua conta</Text>
      <TextInput style={styles.email} placeholder="Email"/>
      <TextInput style={styles.password} placeholder="Senha"/>
      <BotaoNav title={"Entrar"} onPress={() => navigation.navigate('Main') } />
    </View>
  )
}


const styles = StyleSheet.create({

  view: {
    backgroundColor: '#F9FAFB',
    flex: 1,
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: "center",
    paddingHorizontal: 20,
  },

  text: {
    color: '#a5c3a7',
    fontSize: 34,
    textAlign: "center",
    marginBottom: 30,
  },

  email: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    width: "80%",
    alignSelf: "center",
    borderWidth: 1,
    borderColor: "#eee",
    backgroundColor: "#f5f5f5",
    fontSize: 18,
    borderRadius: 8,
    marginBottom: 15,
  },

  password: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    width: "80%",
    alignSelf: "center",
    borderWidth: 1,
    borderColor: "#eee",
    backgroundColor: "#f5f5f5",
    fontSize: 18,
    borderRadius: 8,
    marginBottom: 20,
  }

})


export default TelaLogin
