import { View, Text, StyleSheet } from "react-native";

const AddNoteScreen = () => {
    return (
       <View style={styles.container}>
            <Text>Add Notes Screen</Text>
       </View> 
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default AddNoteScreen;