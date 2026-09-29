import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Header from './components/header';
import { Feather } from '@expo/vector-icons';


export default function App() {
  return (

    <ScrollView style={styles.container}>
      <Header />
      { /*content */}
      <View style={styles.content}>
        <View style={styles.entradaSecao}>
          <Text style={styles.entradaTitulo}>Refresque o seu dia!</Text>
          <Text style={styles.entradaSubtitulo}>Escolha seu açaí favorito de hoje</Text>
        </View>

          {/*Card Inicio */}
        <View style={styles.inicioCard}>
          {/* Imagem Card */}
          <Image source={require("./assets/image.png")} style={styles.imageCard}></Image>
          {/* Imagem Card */}

          {/*Informações do card */}
          <View style={styles.infoCard}>

            {/* Titulo do card */}
            <View style={styles.tituloCard}>
              <Text style={styles.textCard}>Açaí Turbinado 500ml</Text>
              <View style={styles.testeCard}>
                <Text style={styles.testeCardCard}>MAIS PEDIDO</Text>
              </View>
            </View>
            {/* Titulo do card */}

            {/*Subtitulo do card*/}
            <Text style={styles.subtituloCard}>Açaí puro batido com morango, banana, leite condensado e granola crocante</Text>
            {/*Subtitulo do card*/}

            {/* Informações de baixo do card*/}
            <View style={styles.bottonCard}>
              <Text style={styles.precoCard}>R$ 22,90</Text>{/*Pre */}

              {/*Botao de adicionar */}
              <TouchableOpacity>
                <View style={styles.iconContainer}>
                  <Feather style={styles.iconCard} name="shopping-bag" size={16} color="#fff"  />
                  <Text style={styles.textIcon}>Adicionar</Text>
                </View>
              </TouchableOpacity>
              {/*Botao de adicionar */}
            </View>
            {/* Informações de baixo do card*/}

          </View>
          {/*Informações do card */}
        </View>
        {/*Card Inicio */}


        {/* Seção Menu */}
        <View style={styles.menuSection}>
        <Text style = {styles.menuText}>Nossos Copos & Tigelas</Text>
        

        </View>

        {/* Seção Menu */}
      </View>
      { /*content */}

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff"
  },
  content: {
    paddingHorizontal: 24,
  },
  entradaSecao: {
    marginTop: 10,
    marginBottom: 20,
  },
  entradaTitulo: {
    fontSize: 32,
    fontWeight: 800,
    marginBottom: 4,
    color: "#2C1B30"
  },
  entradaSubtitulo: {
    fontSize: 15,
    fontWeight: 400,
    color: "#644D6A"
  },
  inicioCard: {
    backgroundColor: "#ffff",
    borderRadius: 24,
    padding: 16,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.05,
    elevation: 4
  },
  imageCard: {
    width: "100%",
    height: 160,
    borderRadius: 16
  },
  infoCard: {
    paddingHorizontal: 6
  },
  tituloCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10
  },
  textCard: {
    fontSize: 18,
    fontWeight: 800
  },
  testeCard: {
    backgroundColor: "#F3E5F5",
    borderRadius: 6,
    paddingHorizontal: 11

  },
  testeCardCard: {
    fontSize: 12,
    color: "#7B1FA2",
    fontWeight: 800,
    marginTop: 4

  },
  subtituloCard: {
    fontSize: 13,
    fontWeight: 400,
    color: "#644D6A",
    marginTop: 10,
    marginBottom: 15
  },
  bottonCard: {
    flexDirection: "row",
    justifyContent: "space-between",

  },
  precoCard: {
    fontSize: 22.90,
    fontWeight: 800,
    color: "#7B1FA2"
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#7B1FA2",
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 8
  },
  iconCard: {
    paddingRight: 5,
    textShadowColor: '#fff',
    textShadowOffset: { width: 0.5, height: 0.5 },
    textShadowRadius: 1,
  },
  textIcon: {
    color: "#ffff",
    fontWeight: 700,
    fontSize: 12,

  }
});
