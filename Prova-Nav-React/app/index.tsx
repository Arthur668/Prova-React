import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Link } from "expo-router";
import gol from '../assets/go01.jpg'

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.indextxt}> Index </Text>
      <Image source={gol} style={styles.golimg}/>
      <Text style={styles.blogtxt}> Blog do PetrolHead</Text>
      <Text style={styles.txt4l}>  O Gol bolinha mais brabo do Brasil{'\n'}com mais de 400 cavalos ele domina{'\n'}as ruas de são paulo, dando benga em{'\n'}   Up staeigi lua que acha que anda.</Text>
      <Link href="/Sobre" style={styles.btn}><Text style={styles.btntxt}>Sobre</Text></Link>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent:'center',
    marginTop:50,
  },
  titulo:{
    fontWeight:'bold',
  },
  golimg:{
    width:220,
    height:120,
  },
  btn:{
    position:'relative',
    top:100,
    width:50,
    height:18,
    borderRadius:10,
    fontWeight:'bold'
  },
  txt4l:{
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
    marginBottom:10
  }
});
