import { StatusBar } from 'expo-status-bar';
import { Image, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Header from './components/header';
import { Feather } from '@expo/vector-icons';
import { useState } from 'react';
import Button from './components/button';
import Octicons from '@expo/vector-icons/Octicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import CoffeeCard from './components/cards';
import Card from './components/cards';
import Footer from './components/footer';




export default function App() {
    const [nome, setNome] = useState("");
    const [message, setMessage] = useState("");

    const handlerOrder = ()=>{
    if (nome.trim() === ''){
      setMessage('Por favor, Informe seu nome!')
    }else{
      setMessage(`Olá, ${nome}. Pedido iniciado com sucesso`)
    }
  };


  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior='padding'
      keyboardVerticalOffset={30}>


    <ScrollView   >
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
        <Text style = {styles.menuText}>Nossos Copos & Tigelas</Text>
        <View style={styles.menuSection}>
        

          <Card name='Açaí Tradicional' description='Açaí cremoso com banana e granola tradicional' price='R$ 14,00' source={require("./assets/imagem1.jpg")}></Card>
          <Card name='Copo Tropical' description='Camadas de açaí, morango, kiwi e leite em pó' price='R$ 18,50' source={require("./assets/imagem3.jpg")}></Card>
          <Card name='Vitamina de Açaí' description='Bebida energética batida com guaraná e aveia' price='R$ 12,00' source={require("./assets/imagem4.jpg")}></Card>
          <Card name='Açaí Fit Zero' description='Zero adição de açúcar, com chia e castanhas' price='R$ 16,90' source={require("./assets/imagem5.jpg")}></Card>

        </View>

        {/* Seção Menu */}

        {/* Seção input */}

        <View style={styles.inputSection}>
          <Text style={styles.inputQuestion}>
            Qual o seu nome?
          </Text>

          <View style = {styles.input}>
            
          <Octicons style={styles.inputIcon} name="person" size={16} color="black" />
          <TextInput
          placeholder = "Digite seu nome"
          value = {nome}
          onChangeText = {setNome}
          >
          </TextInput>
          </View>

          <Button title='Fazer meu pedido' onPress={handlerOrder}></Button>
          
          {message !== '' && (
            <View style={styles.messageSection}>
              <AntDesign name="check-circle" size={24} color="#2E7D32" />
              <Text style={styles.messageText}>{message}</Text> 
              </View>)
            }
  
        </View>

        {/* Seção input */}
          <Footer></Footer>
      </View>

      { /*content */}

    </ScrollView>
    </KeyboardAvoidingView>
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

  },
  menuSection:{
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 32
  },
  menuText:{
    fontSize: 22,
    fontWeight: "800",
    color: "#2C1B30",
    marginBottom: 16,
    marginTop: 24
  },
  inputSection:{
    backgroundColor: "#ffff",
    borderRadius: 24,
    padding: 16,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.05,
    elevation: 4

  },
  inputQuestion:{
    fontSize: 16,
    fontWeight: 800,
    marginBottom: 10
  },
  input:{
    flexDirection:"row",
    backgroundColor:"#F1EDF4",
    borderRadius: 12,
    paddingHorizontal: 16,
    height: 48
    
  },
  inputIcon:{
    marginTop:15,
    paddingRight:6
  },
  messageSection:{
    paddingLeft: 10,
    flexDirection:"row", 
    paddingVertical: 10,
    backgroundColor: "#E8F5E9",
    borderRadius: 16,
    marginTop: 10
  },  
  messageText:{
    paddingLeft: 8,
    fontWeight:600,
    color: "#2E7D32"
  }
});
