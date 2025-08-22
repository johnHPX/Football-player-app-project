import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

function CardAtleta({ item, btn }) {
  const navigation = useNavigation();

  const dataObj = new Date(item.dateBorn);
  const dataBr = dataObj.toLocaleDateString("pt-BR"); 

  return (
    <View style={styles.container}>

      <View style={styles.divSec}>

       <TouchableOpacity
          onPress={() =>
            navigation.navigate("Detalhes", {
              item,
              btn,  
            })
          }
        >
          {item.strCutout ? (
            <Image source={{ uri: item.strCutout }} style={styles.img} />
          ) : (
            <Image source={require("../assets/defaultImage.png")} style={styles.img} />
          )}
        </TouchableOpacity>

        <View style={styles.info}>
          <Text style={styles.txt}>Nome: {item.strPlayer} </Text>
          <Text style={styles.txt}>Time: {item.strTeam}</Text>
          <Text style={styles.txt}>Nacionalidade: {item.strNationality}</Text>
        </View>

      </View>

      <Button title={btn.title} color={btn.color} onPress={() => btn.onPress()}/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",   
    alignItems: "center",   
    marginBottom: 10,
    padding: 10,       
    minHeight: 120,
    marginVertical: 5,
    backgroundColor: "#F3F4F6",
    borderRadius: 5,
    borderColor: "#E5E7EB",
    borderWidth: 1,
  },

  img: {
    width: 100,
    height: 100,
    resizeMode: "cover",
    marginRight: 10,
    borderWidth: 2,
    borderColor: '#10B981',
    borderRadius: 60,
  },

  info: {
    flex: 1, 
  },

  txt: {
    textAlign: "left",
    textTransform: "capitalize",
    marginBottom: 2
  },

  divSec: {
    flexDirection: "row",
    marginBottom: 10
  }
});

export default CardAtleta;
