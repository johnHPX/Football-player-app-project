import { View, Text, StyleSheet, Image, Button, ScrollView } from 'react-native';
import BotaoNav from '../components/BotaoNav';

function TelaDetalhesJogador({ navigation, route }) {
    const { item, btn } = route.params;

    const dataObj = new Date(item.dateBorn);
    const dataBr = dataObj.toLocaleDateString("pt-BR");

    return (
        <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 20 }}>
            
            <View style={styles.header}>
                <Image
                    source={item.strCutout ? { uri: item.strCutout } : require("../assets/defaultImage.png")}
                    style={styles.img}
                />
                {item.strThumb && (
                    <Image
                        source={{ uri: item.strThumb }}
                        style={styles.thumb}
                    />
                )}
            </View>

            <View style={styles.infoBox}>
                <Text style={styles.name}>{item.strPlayer}</Text>
                <Text style={styles.info}>Time: {item.strTeam}</Text>
                <Text style={styles.info}>Esporte: {item.strSport === "Soccer" ? "Futebol" : item.strSport}</Text>
                <Text style={styles.info}>Sexo: {item.strGender === "Male" ? "Masculino" : "Feminino"}</Text>
                <Text style={styles.info}>Nacionalidade: {item.strNationality}</Text>
                <Text style={styles.info}>Data de Nascimento: {dataBr}</Text>
                {item.relevance && <Text style={styles.info}>Relevância: {item.relevance}</Text>}
            </View>

            <View style={styles.buttonContainer}>
                <Button title={btn.title} color={btn.color} onPress={() => {
                  btn.onPress()
                  navigation.goBack()
                }} />
            </View>
            <BotaoNav title={'voltar'} onPress={() => navigation.goBack()}/>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9FAFB',
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20,
    },

    img: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginRight: 15,
        borderWidth: 2,
        borderColor: '#10B981',
    },

    thumb: {
        width: 120,
        height: 120,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#E5E7EB',
    },

    infoBox: {
        paddingHorizontal: 20,
        paddingVertical: 15,
        backgroundColor: '#FFFFFF',
        marginHorizontal: 15,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 5 },
        elevation: 3,
    },

    name: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#1E3A8A',
        marginBottom: 10,
        textAlign: 'center',
    },

    info: {
        fontSize: 16,
        color: '#374151',
        marginBottom: 6,
        textTransform: 'capitalize',
    },

    buttonContainer: {
        marginTop: 25,
        marginHorizontal: 50,
        marginBottom: 20
    },
});

export default TelaDetalhesJogador;
