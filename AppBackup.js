import {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import firebaseApp from './firebaseConfig';

export default function App() {
  const auth = getAuth(firebaseApp);
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  
  const signUp = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      console.log(user);
    } catch (error) {
      console.error(error);
    }
  }

  const signIn = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      console.log(user);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <View style={styles.container}>
      <TextInput 
        value={email}
        onChangeText={(text) => setEmail(text)}
        placeholder='email' style={{
        width: '80%',
        borderWidth: 1,
        borderColor: 'grey',
        height: 56,
        marginBottom: 30,
        paddingHorizontal: 16
      }}/>
      <TextInput 
        value={password}
        onChangeText={setPassword}
        placeholder='password' style={{
        width: '80%',
        borderWidth: 1,
        borderColor: 'grey',
        height: 56,
        paddingHorizontal: 16
      }}/>
      <Button title='Sign Up' onPress={signUp} />
      <Button title='Sign In' onPress={signIn} />
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
});
