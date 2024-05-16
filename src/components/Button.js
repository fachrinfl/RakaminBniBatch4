
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import {colors, sizes} from '../theme';

const Button = ({title, onPress, type}) => {
    return (
        <TouchableOpacity style={[
            styles.btn,
            type === 'danger' && styles.danger
        ]} onPress={onPress}>
            <Text style={styles.btnTitle}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    btn: {
        backgroundColor: colors.primary.blue,
        height: 56,
        borderRadius: sizes.medium,
        justifyContent: 'center',
        alignItems: 'center',
    },
    danger: {
        backgroundColor: colors.secondary.red,
    },
    btnTitle: {
        color: colors.textColors.white,
        fontWeight: '600'
    }
});

export default Button;