import {useState} from 'react';
import { View, Text, StyleSheet } from "react-native";
import {colors, sizes} from '../../../theme';
import {useNavigation} from '@react-navigation/native'
import Firebase from '../../../../firebaseConfig';
import { signInWithEmailAndPassword } from "firebase/auth";
import { Input, Button } from '../../../components';

const SignInScreen = () => {
    const navigation = useNavigation()
    const [email, setEmail] = useState('fachri@gmail.com');
    const [password, setPassword] = useState('123456');

    const signIn = async () => {
        try {
          await signInWithEmailAndPassword(Firebase.auth, email, password);
          navigation.reset({
            index: 0,
            routes: [{name: 'DashboardScreen'}]
          })
        } catch (error) {
          console.error(error);
        }
      }

    return (
       <View style={styles.container}>
            <Text style={styles.title}>Signin to your account</Text>
            <View style={styles.line} />
            <Input 
                value={email}
                onChangeText={(text) => setEmail(text)}
                placeholder='Email' />
            <Input 
                value={password}
                onChangeText={(text) => setPassword(text)}
                placeholder='Password' />
            <Button 
                title="SignIn"
                onPress={signIn}
            />
       </View> 
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: sizes.xl4
    },
    title: {
        color: colors.textColors.black,
        fontWeight: '800',
        fontSize: sizes.xl
    },
    line: {
        width: 87,
        height: 4,
        borderRadius: 4,
        backgroundColor: colors.primary.blue,
        marginTop: sizes.xl2,
        marginBottom: 48,
    },
});

export default SignInScreen;