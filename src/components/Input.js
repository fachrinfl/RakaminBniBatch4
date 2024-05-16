import {useState} from 'react';
import { StyleSheet, TextInput } from "react-native";
import {colors, sizes} from '../theme';

const Input = () => {
    const [email1, setEmail1] = useState('fachri@gmail.com');

    return (
        <TextInput 
        value={email1}
        onChangeText={(text) => setEmail1(text)}
        placeholder='Email' style={styles.input}/>
    );
}

const styles = StyleSheet.create({
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
});

export default Input;