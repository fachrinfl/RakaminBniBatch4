import {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import {colors, sizes} from '../../../theme';
import {useNavigation} from '@react-navigation/native'

const SignInScreen = () => {
    const navigaiton = () => useNavigation()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
       <View style={styles.container}>
            <Text style={styles.title}>Signin to your account</Text>
            <View style={styles.line} />
            <TextInput 
                value={email}
                onChangeText={(text) => setEmail(text)}
                placeholder='Email' style={styles.input}/>
            <TextInput 
                value={password}
                onChangeText={(text) => setPassword(text)}
                placeholder='Password' style={styles.input}/>
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnTitle}>SignIn</Text>
            </TouchableOpacity>
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
    input: {
        height: 56,
                width: '100%',
                marginBottom: sizes.xl8,
                paddingHorizontal: sizes.large,
                paddingVertical: sizes.xl,
                backgroundColor: colors.textColors.whiteGrey,
                borderRadius: sizes.medium,
                fontWeight: '600'
    },
    btn: {
        backgroundColor: colors.primary.blue,
        height: 56,
        borderRadius: sizes.medium,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnTitle: {
        color: colors.textColors.white,
        fontWeight: '600'
    }
});

export default SignInScreen;