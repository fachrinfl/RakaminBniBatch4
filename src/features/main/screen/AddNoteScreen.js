import { View, Text, StyleSheet, ScrollView } from "react-native";
import {Input, Button} from '../../../components';
import { sizes } from "../../../theme";
import { useState } from "react";
import { useDispatch } from "react-redux"; 
import {addNote} from '../../../store/actions/noteActions';
import {useNavigation} from '@react-navigation/native';

const AddNoteScreen = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const dispatch = useDispatch();
    const navigation = useNavigation();

    const saveHandler = () => {
        dispatch(addNote({
            id: Date.now(),
            title,
            description
        }));
        navigation.goBack();
    }

    return (
       <ScrollView contentContainerStyle={styles.container}>
            <Input 
                placeholder="Title"
                value={title}
                onChangeText={setTitle}
            />
            <Input 
                placeholder="Description"
                value={description}
                onChangeText={setDescription}
                multiline
            />
            <Button 
                title="Save"
                onPress={saveHandler}
            />
       </ScrollView> 
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: sizes.xl4
    }
});

export default AddNoteScreen;