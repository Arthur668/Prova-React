import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image, TouchableOpacity, TextInput} from 'react-native';
import { Link } from "expo-router";
import gol from '../assets/go01.jpg'

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.indextxt}> Cadastro </Text>

      <Image source={gol} style={styles.golimg}/>

      <Text style={styles.titulo}>Blog do PetrolHead</Text>
     
      <TextInput 
      style={styles.inputnome}
      placeholder='Nome'
      />

      <TextInput 
      style={styles.inputemail}
      placeholder='E-mail'
      />

      <TextInput 
      style={styles.inputdtnas}
      placeholder='Data de Nascimento'
      />

      <TextInput 
      style={styles.inputcpf}
      placeholder='CPF'
      />

      <TouchableOpacity>
        <Text style={styles.btnsa}>Salvar</Text>
      </TouchableOpacity>
      <Link href="/" style={styles.btn}>Ir para o Index</Link>

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
  inputnome:{
    color:'black',
  },
  inputemail:{
    color:'black',
  },
  inputdtnas:{
    color:'black',
  },
  inputcpf:{
    color:'black',
  },
  btn:{
    position:'relative',
    top:100,
    width:100,
    height:18,
    borderRadius:10,
    fontWeight:'bold',
  },
  indextxt:{
    fontWeight:'bold',
    marginBottom:10
  },
  btnsa:{

  }
});
