import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';
import { Link } from "expo-router";
import gol from '../assets/go01.jpg'
import ft11 from '../assets/ft1.png'
import ft12 from '../assets/ft2.png'
import ft13 from '../assets/ft3.png'
import ft14 from '../assets/ft4.png'
import ft15 from '../assets/ft5.png'
import ft16 from '../assets/ft6.png'
import ft17 from '../assets/ft7.png'
import ft18 from '../assets/ft8.png'
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.indextxt}> Home </Text>
     
      <Image source={gol} style={styles.golimg}/>
      <Text style={styles.blogtxt}> Blog do PetrolHead</Text>
      <Image source={ft11} style={styles.golimg1}/>
      <Image source={ft12} style={styles.golimg2}/>
      <Image source={ft13} style={styles.golimg3}/>
      <Image source={ft14} style={styles.golimg4}/>
      <Image source={ft15} style={styles.golimg5}/>
      <Image source={ft16} style={styles.golimg6}/>
      <Image source={ft17} style={styles.golimg7}/>
      <Image source={ft18} style={styles.golimg8}/>
      <Link href="/Cadastro" style={styles.btn}><Text style={styles.btntxt}>Tela Cadastro</Text></Link>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems:'center',
    marginTop:10,
  },
  btn:{
    position:'relative',
    width:100,
    height:18,
    borderRadius:10,
    fontWeight:'bold',
  },
  indextxt:{
    fontWeight:'bold',
    marginBottom:10
  },
  golimg:{
    width:220,
    height:120,
    marginBottom:20,
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
  golimg1:{
    position:'relative',
    left:50,
    width:70,
    height:50
  },
  golimg2:{
    position:'relative',
    left:50,
    width:70,
    height:50
  },
  golimg3:{
    position:'relative',
    left:50,
    width:70,
    height:50
  },
  golimg4:{
    position:'relative',
    left:50,
    width:70,
    height:50
  },
  golimg5:{
    position:'relative',
    right:50,
    bottom:200,
    width:70,
    height:50
  },
  golimg6:{
    position:'relative',
    right:50,
    bottom:200,

    width:70,
    height:50
  },
  golimg7:{
    position:'relative',
    right:50,
    bottom:200,

    width:70,
    height:50
  },
  golimg8:{
    position:'relative',
    right:50,
    bottom:200,
    width:70,
    height:50
  },

});
