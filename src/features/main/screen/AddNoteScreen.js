import { View, Text, StyleSheet, ScrollView } from "react-native";
import {Input, Button} from '../../../components';
import { sizes } from "../../../theme";
import { useState } from "react";

const AddNoteScreen = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
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
            />
            <Button 
                title="Save"
                onPress={() => {}}
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