import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';
import { Link } from "expo-router";
import gol from '../assets/go01.jpg'
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.indextxt}> Sobre </Text>
      <Image source={gol} style={styles.golimg}/>
      <Text style={styles.blogtxt}> Blog do PetrolHead</Text>
      <Text style={styles.txt4l}>Este gol é um carro que foi feito pelo{'\n'}youtuber conhecido por PetrolHead que{'\n'}é bem grande no youtube envolvendo{'\n'}carros, onde ele compra carros e mexe.</Text>
      <Link href="/Home" style={styles.btn}><Text style={styles.btntxt}>Tela Cadastro</Text></Link>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo:{
    fontWeight:'bold'
  },
  golimg:{
    width:220,
    height:120,
  },
  btn:{
    position:'relative',
    top:100,
    width:100,
    height:18,
    borderRadius:10,
    fontWeight:'bold',
  },
  txt4l:{
    position:'relative',
    left:10,
    textAlign:'justify',
  },
  blogtxt:{
    fontWeight:'bold',
    marginBottom:10,
    marginTop:10,
  },
  btntxt:{
    position:'relative',
    left:60,

  },
  indextxt:{
    fontWeight:'bold',
    marginBottom:10,
  }
});
