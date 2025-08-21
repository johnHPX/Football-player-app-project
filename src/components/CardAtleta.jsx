import { StyleSheet, Text, View, Image, Button } from "react-native";

function CardAtleta({ item, isFavorito }) {
  return (
    <View style={styles.container}>

      <View style={styles.divSec}>

        <Image
          source={{ uri: item.strCutout }}
          style={styles.img}
        />

        <View style={styles.info}>
          <Text style={styles.txt}>Nome: {item.strPlayer} </Text>
          <Text style={styles.txt}>Time: {item.strTeam}</Text>
          <Text style={styles.txt}>Esporte: {item.strSport}</Text>
          <Text style={styles.txt}>Sexo: {item.strGender}</Text>
          <Text style={styles.txt}>Nacionalidade: {item.strNationality}</Text>
          <Text style={styles.txt}>Data de Nascimento: {item.dateBorn}</Text>
        </View>

      </View>

      {isFavorito
        ? <Button title="Desfavoritar" color={"#10B981"}/>
        : <Button title="Favoritar" color={"#9CA3AF"}/>
      }

      
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
    marginRight: 10
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
