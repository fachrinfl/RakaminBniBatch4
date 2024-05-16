import { Text, StyleSheet, TouchableOpacity, FlatList, Alert, View } from "react-native";
import {colors, sizes} from '../../../theme';
import {useSelector, useDispatch} from 'react-redux';
import {Ionicons} from '@expo/vector-icons';
import { deleteNote } from "../../../store/actions/noteActions";
import {useNavigation} from '@react-navigation/native';

const DashboardScreen = () => {
    const notes = useSelector((state) => state.notes.notes);
    const dispatch = useDispatch();
    const navigation = useNavigation();

    const noteRender = (item) => (
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('EditNoteScreen', {item})}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
            <TouchableOpacity style={styles.btnDelete} onPress={() => Alert.alert(
                'Delete Note?', 
                'Deleting this note will permanently remove it from your account', [
                    {
                        text: 'Cancel',
                        onPress: () => {},
                        style: 'cancel'
                    },
                    {
                        text: 'OK',
                        onPress: () => dispatch(deleteNote(item.id))
                    }
                ])}>
                <Ionicons 
                    name="trash-outline"
                    size={18}
                    color={colors.secondary.red}
                />
                <Text style={styles.btnText}>Delete</Text>
            </TouchableOpacity>
        </TouchableOpacity>  
    );

    if (!notes.length) {
        return (
            <View style={styles.emptyContainer}>
                <Text style={styles.text}>No notes have been made yet, please add some</Text>
            </View>
        );
    }

    return (
       <FlatList 
        data={notes}
        contentContainerStyle={styles.container}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => noteRender(item)}
       /> 
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: sizes.xl2 / 2 
    },
    card: {
        margin: sizes.xl2 / 2,
        paddingHorizontal: sizes.large,
        paddingVertical: sizes.xl2,
        borderRadius: sizes.large,
        borderColor: colors.textColors.whiteGrey,
        borderWidth: 1,
    },
    title: {
        color: colors.textColors.black,
        fontWeight: '600',
        fontSize: sizes.large,
        marginBottom: 8,
    },
    description: {
        color: colors.textColors.grey,
        fontWeight: '400',
        fontSize: sizes.small,
    },
    btnDelete: {
        flexDirection: 'row',
        marginTop: sizes.xl2,
        alignSelf: 'flex-end'
    },
    btnText: {
        color: colors.secondary.red,
        fontWeight: '400',
        fontSize: sizes.large,
        marginLeft: 8,
    },
    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: colors.textColors.grey,   
        textAlign: 'center',
        fontWeight: '600',
    }
});

export default DashboardScreen;